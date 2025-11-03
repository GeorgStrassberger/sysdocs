# Workloads
- Cron Jobs
- Daemon Sets
- **Deployments**
- Stateful Sets
- Replication Controllers
- Replica Sets

## Deployments via Terminal

Example using the **nginx** image from: [https://hub.docker.com/_/nginx](https://hub.docker.com/_/nginx)

### Create a deployment
```bash
kubectl create deployment nginx-deployment --image=nginx --replicas=3 --port=80
deployment.apps/nginx-deployment created
```

Creates a `deployment` named `nginx-deployment` using the `nginx` image.
You can specify a `port` for documentation purposes, similar to EXPOSE in Dockerfiles.

```
kubectl get pods
NAME                                READY   STATUS    RESTARTS   AGE
nginx-deployment-664fcb7fb8-288gv   1/1     Running   0          2m31s
nginx-deployment-664fcb7fb8-5dkrs   1/1     Running   0          2m31s
nginx-deployment-664fcb7fb8-6pwjc   1/1     Running   0          2m31s
```

### Edit a deployment

View or modify the Deployment configuration:
```bash
kubectl edit deployment nginx-deployment
deployment.apps/nginx-deployment edited
```

### Scale a deployment

```bash
kubectl scale deployment nginx-deployment --replicas=9
```


### Delete a deployment

Deletes the specified resource and all objects created with it.
```bash
kubectl delete deployment nginx-deployment
deployment.apps "nginx-deployment" deleted
```

---

## Deployments via YAML

Example using the **httpd** image from: [https://hub.docker.com/_/httpd](https://hub.docker.com/_/httpd)

### Apply a YAML file:

Create a YAML file, for example, with vi:
```bash
vi httpd-deylopment.yaml
```

Example manifest:
```yaml
apiVersion: apps/v1           # Kubernetes API version
kind: Deployment              # Type of resource
metadata:                     # Object metadata (name, labels, etc.)
  name: httpd-deployment       
  labels:                      
    app: httpd
spec:                         # Desired state of the resource
  replicas: 3                 # Count of pods to run
  selector:
    matchLabels:
      app: httpd              
  template:                   # Pod template
    metadata:
      labels:
        app: httpd            
    spec:
      containers:
      - name: httpd           # Container name
        image: httpd:latest   # Container image
        ports:
        - containerPort: 80   # Expose port 80 from the container to the host
```

```bash
kubectl apply -f httpd-deployment.yml
deployment.apps/httpd-deployment created
```
