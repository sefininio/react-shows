
node("master"){

  String version = ""

  stage("Checkout"){
    checkout scm
  }

  stage("Build docker image"){
    String baseVersion = sh(returnStdout: true, script: "cat package.json | grep '\"version\":' | awk -F '\"' '{print \$4}'").trim()
    version = "${baseVersion}.${env.BUILD_NUMBER}"

    echo "## Build docker image"
    sh "docker build -t ${env.DOCKER_REGISTRY}/tikal/react-shows:${version} ."

    currentBuild.description = "${version}"
  }

  stage("Run Tests"){
    echo "## Run tests"
    sh "docker run --rm -e CI=true --name react_shows_${version} ${env.DOCKER_REGISTRY}/tikal/react-shows:${version} npm test"

  }

  stage("Push docker image"){
    echo "## Push docker image"
    sh "docker push ${env.DOCKER_REGISTRY}/tikal/react-shows:${version}"
  }

}
