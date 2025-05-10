pipeline {
  agent any

  environment {
    COMPOSE_INTERACTIVE_NO_CLI = 1
  }

  triggers {
    githubPush()
  }

  options {
    skipDefaultCheckout(true)
  }

  stages {
    stage('Clonar develop para pruebas') {
      steps {
        deleteDir()
        git branch: 'develop', url: 'https://github.com/usuario/repositorio.git'
      }
    }

    stage('Prueba frontend') {
      steps {
        sh '''
          status=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000)
          if [ "$status" -ne 200 ]; then
            echo "Error al acceder al frontend"
            exit 1
          fi
          echo "Frontend responde con código: $status"
        '''
      }
    }

    stage('Confirmar despliegue a producción') {
      steps {
        input message: '¿Desplegar el frontend a producción?'
        deleteDir()
        git branch: 'main', url: 'https://github.com/usuario/repositorio.git'
        sh 'docker-compose -f docker-compose.prod.yml up -d --build frontend'
      }
    }
  }
}
