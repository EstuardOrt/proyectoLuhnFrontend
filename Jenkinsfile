pipeline {
  agent {
    docker {
      image 'node:18'
    }
  }

  environment {
    NODE_ENV = 'test'
  }

  stages {
    stage('Instalar dependencias') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Ejecutar pruebas unitarias') {
      steps {
        sh 'npm test'
      }
    }

    stage('Confirmar despliegue a producción') {
      when {
        expression { currentBuild.resultIsBetterOrEqualTo('SUCCESS') }
      }
      steps {
        
        withCredentials([
          usernamePassword(
            credentialsId: 'github-creds',
            usernameVariable: 'GIT_USER',
            passwordVariable: 'GIT_TOKEN'
          )
        ]) {
          sh '''
            git reset --hard HEAD
            git clean -fd
            git config user.name "$GIT_USER"
            git config user.email "ci@jenkins.local"
            git remote set-url origin https://$GIT_USER:$GIT_TOKEN@github.com/EstuardOrt/proyectoLuhnFrontend.git
            git fetch origin
            git checkout main
            git pull origin main
            git checkout origin/main -- Jenkinsfile
            git merge --no-ff origin/develop -m "Merge automático tras pruebas exitosas" -X ours
            git push origin main
          '''
        }
      }
    }
  }
}
