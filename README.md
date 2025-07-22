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

   This Service exposes Our Deployment (and Therefore your App) to the Outside World or within the Cluster, depending on the type (NodePort, ClusterIP, etc.).
   The Service creates a Stable Network Endpoint (URL or IP:Port) for your App.
