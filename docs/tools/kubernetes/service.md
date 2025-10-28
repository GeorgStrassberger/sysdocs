# Service
- Ingresses
- Ingress Classes
- **Services**

## Services via Terminal

### Create a service

Example for the **nginx** deployment:
```bash
# kubectl create service [TYPE] [NAME] --tcp=[PORT]:[TARGET-PORT]
kubectl create service nodeport nginx-service --tcp=80:80
```

Refer to services on pods with the corresponding `labels`
```bash
# kubectl set selector service [NAME] [KEY]=[VALUE]
kubectl set selector service nginx-service app=nginx-deployment
```

Output all services:
```bash
kubectl get service nginx-service -o wide
NAME            TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE     SELECTOR
nginx-service   ClusterIP   10.43.45.1   <none>        80/TCP    8m51s   app=nginx-deployment
```

Now you can open the Nginx start page in your browser at `http://192.168.178.52:31133/`.


### Delete a Service

Deletes the specified resource and all objects created with it.

```bash
kubectl delete service httpd-service
service "httpd-service" deleted
```

---

## Services via YAML

Example for the **httpd** deployment:

### Apply a YAML file:

Create a YAML file, for example, with vi:
```bash
kubectl apply -f [path/to/file.yaml]
```

```bash
vi httpd-service.yaml
```

```bash
apiVersion: v1        # The API version used for the Service resource.
kind: Service         # Defines the resource type
metadata:             # Contains the Service name and labels for identification.
  name: httpd-service
  labels:
    app: httpd
spec:                 # Describes how the Service behaves.
  type: NodePort
  selector:
    app: httpd
  ports:
    - port: 80        # Port exposed by the Service (inside the cluster)
      targetPort: 80  # Port on the container (Pod)
      nodePort: 30080 # Fixed port on the Node (must be between 30000–32767)
```

```bash
kubectl apply -f ./httpd-service.yaml
service/httpd-nodeport created
```

```bash
kubectl get service
NAME               TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)        AGE
httpd-service      NodePort    10.43.98.216   <none>        80:30080/TCP   56s
kubernetes         ClusterIP   10.43.0.1      <none>        443/TCP        8d
nginx-service      NodePort    10.43.45.1     <none>        80:31133/TCP   19m
```
