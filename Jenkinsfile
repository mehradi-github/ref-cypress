pipeline {
    agent any 
    tools{
        nodejs "node"
    }
    stages{
        stage('Cypress parallel test'){
            parallel{
                stage('Slave Node 1') {
                    agent{
                        lable "agent1"
                    } 
                    steps{
                        git branch: 'main', credentialsId: 'jenkins-github', url:"https://github.com/mehradi-github/ref-cypress.git"
                        sh 'pnpm install'
                        sh 'pnpm run ${script}'
                    }
                }
                
            }
        }
    }