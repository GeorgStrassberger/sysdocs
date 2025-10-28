# K3s Home Cluster Setup

I have two machines in my home network: a **Fujitsu** and a **RaspberryPi4**. The `fujitsu` is to be the master/control plane and the `raspi` an additional worker node.

---

## Hardware:

- `fujitsu` | OS Ubuntu 24.04.3 LTS x86_64
- `raspi` | OS Debian 13 Trixie aarch64

Control-Plane & WorkerNode
![fastfetch_fujitsu.png](../img/fastfetch_fujitsu.png)

WorkerNode
![fastfetch_raspi.png](../img/fastfetch_raspi.png)

---

## Links

- [K3s/Quickstart](https://docs.k3s.io/quick-start)
- Einrichten der Verbindung per ssh-key

---

## Quickstart

### 1. Fujitsu 

Login with ssh-key & passphrase
```bash
ssh fujitsu
```

Install K3s

```
curl -sfL https://get.k3s.io | sh -
```

Output server/node token:

```
sudo cat /var/lib/rancher/k3s/server/node-token
```

![node-token.png](../img/node-token.png)

Save the **node-token**, to add later the RaspberryPi4 as a WorkerNode. 

### 2. Raspberry Pi 4 

Login with ssh-key & passphrase
```bash
ssh raspi
```

Open the file:
```bash
sudo vi /boot/firmware/cmdline.txt
```

Open the file: 
```bash
sudo vi /boot/firmware/cmdline.txt
```

Add the following line:
```text
console=serial0,115200 console=tty1 root=PARTUUID=58b06195-02 rootfstype=ext4 elevator=deadline fsck.repair=yes rootwait cgroup_memory=1 cgroup_enable=memory
```

Install K3s and add it as a WorkerNode
```bash
curl -sfL https://get.k3s.io | K3S_URL=http://192.168.178.52:6443 K3S_TOKEN=K10910fa71db0cb054b574bf8a40f52828b4c3286cdc0695d24efbdd25ac113cc72::server:62f43601f5b0d2daf42dd86752e62bd3 sh -
```

### 3. Check the Cluster

On the MasterNode/Control-Plane:
```bash
sudo kubectl get nodes
```

```text
NAME      STATUS   ROLES                  AGE   VERSION
fujitsu   Ready    control-plane,master   1d   v1.33.5+k3s1
raspi     Ready    <none>                 1d   v1.33.5+k3s1
```

![skizze.png](../img/skizze.png)

---

## Dashboard Access

```text
NAME                    TYPE        CLUSTER-IP  EXTERNAL-IP     PORT(S)         AGE
kubernetes-dashboard    NodePort    10.43.89.99 &lt;none&gt;    443:30594/TCP   14m
```

Open: https://192.168.178.52:30594/#/login

admin-user-token:
```text
eyJhbGciOiJSUzI1NiIsImtpZCI6Ilh2NjZqajdTRnByeVdOOXJLT0w2MVlIQmFCNnRtNDVjaU00XzZTNnVtODQifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiI4OWE0OGNhZC00YjBhLTQ1MzItYmVjYi01N2ZmZGNmNWYwMmYiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZXJuZXRlcy1kYXNoYm9hcmQ6YWRtaW4tdXNlciJ9.gpLY9eG50LkvJ-1mW9d2Xcub-_HKhQG-pq2k3ex4XeC816LxmOUlJwgJfOLVrHT9ZJV7P3SU_nVcv5YUPmzQRP6W-uaeJZLtIfCNx_GXSewG9Je7L8lDubUdU9koU976V8YGTckLNwhTkABV-GrNrMKBXGLR2N_J-lMlNFZRu3hsJMlNDQqeRdpOgIQoxuptMnsMCoSMs11ymGQmX7tVNNMAWEo8uDWmnVlel9J4JK3MCbkA-x3XUEJQOP7LHeLRFyF7el7DZhT-e7zOtPtAYMDAFWbQi9fecbyKCYvDD7A_qq0z3cTp7halaqnGl9krQyozwgdGWnhyuY590cTkdQ
```

---