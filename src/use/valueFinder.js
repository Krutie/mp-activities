// Activity 2: Get value by path 

import { ref } from 'vue';

export default function valueFinder() {

  const result = ref('')
  const inValid = ref(false)

  function checkPath(path, refObj) {
    if (path) {
      findValue(path.split('.'), refObj)
    } else {
      result.value = `You must enter the valid path.`
      inValid.value = true
    }
  }

  function findValue(path, refObj) {

    path.map((node, index) => refObj = refObj[path[index]])

    if (!refObj) {
      result.value = 'Value not found, invalid path.'
      inValid.value = true
    } else {
      result.value = refObj
      inValid.value = false
    }
  }

  return {
    checkPath, result, inValid
  }
}