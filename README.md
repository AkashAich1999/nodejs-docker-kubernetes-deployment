# nodejs-docker-kubernetes-deployment  

<img width="1722" height="933" alt="nodejs_docker_k8" src="https://github.com/user-attachments/assets/ace7b0cc-d09c-48ee-a7c3-3c625dfa64c0" />  



### Tools & Technologies Used:   
1. Node.js
2. Docker  
3. Kubernetes (Minikube)  
4. kubectl  

Deployed a Node.js Application using Docker and Kubernetes (Minikube). The process will involve Containerizing the App, Publishing it to Docker Hub, and Orchestrating it within a Local Kubernetes Cluster for Scalability and Easy Management. 

### Step-by-Step Process:
1. Started with Building a Simple Node.js App. (The Project includes server.js, a package.json, and other Necessary Files for a Basic API or Web Server.).

2. Dockerize the Node.js App:  
   * Write a Dockerfile that describes how to package the app as a Docker Image.
   * Build the Docker Image Locally:  
     
 
   ```terminal
   docker build -t nodejs_docker_kubernetes_deployment .
   ```
   * This Packages the App and its Dependencies into a Standardized, Portable Format.

3. Run (Test) the Docker Image Locally:
   * Use Docker to run the Image as a Container on our Local Machine, to ensure the App works inside Docker.    
  
  
   ```terminal
   docker run -p 3000:3000 -d nodejs_docker_kubernetes_deployment
   ```
   * Verify the App is Accessible at localhost:3000.

4. Tag and Push the Image to Docker Hub:
   * Tag the Image with our Docker Hub username and a version (Tag the Image so it can be uniquely Identified and Accessed).
  
   
   ```terminal
   docker tag nodejs_docker_kubernetes_deployment yourusername/nodejs_docker_kubernetes_deployment:1.0
   ```
   * Push the Image to Docker Hub so it can be Accessed by Kubernetes.  
  
  
   ```terminal
   docker push yourusername/nodejs_docker_kubernetes_deployment:1.0
   ```

5. Set up Local Kubernetes with Minikube:
   Use Minikube to run a Local Kubernetes (k8s) Cluster on our Machine. (This gives us a Testing Environment that simulates how Kubernetes works in Production.)
   ```terminal
   minikube start
   ```
6. Create Kubernetes Manifests:
   * Write deployment.yaml to define the desired state for running Pods (replicas of your container).    
  
  
   ```terminal
   cd k8s
   ```  
   ```terminal
   kubectl create deployment nodejs-docker-kubernetes-deployment --image=yourusername/nodejs_docker_kubernetes_deployment:1.0 --dry-run=client -o yaml > deployment.yaml
   ```
   * deployment.yaml file that defines a Kubernetes Deployment Resource.
   * Inside deployment.yaml file, we change replicas:3 from replicas:1.
   * Also Inside deployment.yaml, 
we will write: containerPort:3000 

   * Write service.yaml to expose our application (typically using NodePort or LoadBalancer service in Minikube).

   ```terminal
   kubectl expose deployment nodejs-docker-kubernetes-deployment --port=80 --target-port=3000 --type=LoadBalancer --dry-run=client -o yaml > service.yaml
   ```

7. Deploy the Application to Kubernetes:
   * Apply the deployment manifest:  
  
  
   ```terminal
   kubectl apply -f deployment.yaml
   ```
   * Apply the service manifest:  
   
 
   ```terminal
   kubectl apply -f service.yaml
   ```

8. Verify and Access the Deployment:  

   * What This Step Does:  
       * Ensures your Node.js App started correctly.

       * Verifies that the Pods are Running.

       * Finds the correct URL/Port to access the App in your Browser.

    * Commands to Use:
    1. Check Deployments:  
  
    
   ```terminal
   kubectl get deployments
   ```  

   2. Check Pods:  

  
   ```terminal
   kubectl get pods
   ```

   3. Check Services: 
  
   
   ```terminal
   kubectl get services
      ```

   4. Get the Application URL: If you exposed the service using NodePort or LoadBalancer, use:  
  
      

    ```terminal
    minikube service <service-name>
    ```
