/* eslint-disable */
export const validateModel = function (model, vm, allowNull, cb) {
  var letNull = allowNull || false
  if (model) {
    _modelAttributeValidation(model, vm, letNull, cb)
  }
}

const _modelAttributeValidation = function (modelName, vm, letNull, cb) {
  var model = vm[modelName]
  var found_validator_index

  for (var i = 0; i < vm.validations.length; i++) {
    if (vm.validations[i].model === modelName) {
      found_validator_index = i
    }
  }

  var keyList = Object.keys(model)
  var requiredItems = keyList.filter((keyItem) => {
    return keyItem.indexOf('optional_') === -1
  })

  for (var i = 0; i < requiredItems.length; i++) {
    var reqItem = requiredItems[i]
    if (model[reqItem] === null || model[reqItem] === '' || model[reqItem] === 'default' || vm.valid[reqItem] === false) {

      vm.validations[found_validator_index].valid = false

      var message = messages[modelName][reqItem]
      cb(message)
      break
    } else {
      vm.validations[found_validator_index].valid = true
    }
  }
}

export const validatePhone = function (key, value, moreThan, lessThan, dataObj, vm) {
  if (value) {
    var punctuationless = value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    var phoneNospaces = punctuationless.replace(/\s{2,}/g," ")
    vm[dataObj].phone = phoneNospaces
    var numberizedVal = Number(phoneNospaces)

    if (!Number.isNaN(numberizedVal)) {
      if (String(numberizedVal).length > moreThan && String(numberizedVal).length < lessThan) {
        vm.valid[key] = true
      } else {
        vm.valid[key] = false
      }
    } else {
      vm.valid[key] = false
    }
  } else {
    vm.valid[key] = false
  }
}

export const validateNumberAndLength = function (key, value, moreThan, lessThan, vm) {
  if (value) {
    var numberizedVal = Number(value)

    if (!Number.isNaN(numberizedVal)) {
      if (String(numberizedVal).length > moreThan && String(numberizedVal).length < lessThan) {
        vm.valid[key] = true
      } else {
        vm.valid[key] = false
      }
    } else {
      vm.valid[key] = false
    }
  } else {
    vm.valid[key] = false
  }
}
