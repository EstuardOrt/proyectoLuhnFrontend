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
        echo 'Despliegue aprobado'
      }
    }
  }
}
