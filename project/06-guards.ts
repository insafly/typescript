// это некие конструкции, которые помогают работать с типами

function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2)
  }

  return x.trim()
}

// instanceof - проверяет принадлежность инстанса к классу
class MyResponse {
  header = 'response header'
  result = 'response result'
}

class MyError {
  header = 'Error header'
  message = 'Error message'
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result
    }
  }

  return {
    info: res.header + res.message
  }
}

// ----

type AlertType = 'success' | 'danger' | 'warning';

function setAlertType(type: AlertType) {
  // ...
}

setAlertType('success')
// setAlertType('trarara') // error