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
                        lable "remote_node1"
                    } 
                    steps{
                        git url:"https://github.com/mehradi-github/ref-cypress.git"
                        sh 'pnpm install'
                        sh 'pnpm run ${script}'
                    }
                }
                
            }
        }
    }