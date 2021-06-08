      const form = document.getElementById("form");
      const username = document.getElementById("username");
      const email = document.getElementById("email");
      const password = document.getElementById("password");
      const password2 = document.getElementById("password2");
      var count = 0;
      //Show input error message
      function ShowError(input, message) {
        const formControl = input.parentElement;
        formControl.className = "form-control error";
        const small = formControl.querySelector("small");
          small.innerText = message;
          count++;
      }

      //Show input success
      function ShowSuccess(input) {
        const formControl = input.parentElement;
          formControl.className = "form-control success";
          count = 0;
      }

      //Check email
      function CheckEmail(input) {
        const char =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (char.test(input.value.trim())) {
          ShowSuccess(input);
        } else {
          ShowError(input, "Email is not valid");
        }
      }
      function CheckRequired(inputErr) {
        inputErr.forEach(function (input) {
          if (input.value.trim() === "") {
            ShowError(input, `${getFieldName(input)} is required`);
          } else {
            ShowSuccess(input);
          }
        });
      }

      function CheckLenght(input, min, max) {
        if (input.value.length < min) {
          ShowError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
          );
        } else if (input.value.length > max) {
          ShowError(
            input,
            `${getFieldName(input)} must be less then ${max} characters`
          );
        } else {
          ShowSuccess(input);
        }
      }

      function CheckPassword(input) {
        if (password.value.length !== 8) {
          ShowError(input, `${getFieldName(input)} must be 8 characters`);
        }
        if (/[a-zA-Z]/.test(password.value.substring(0, 1)) != true) {
          ShowError(input, `${getFieldName(input)}  must start with letter`);
        }
        if (
          password.value.substring(0, 1) !==
          password.value.substring(0, 1).toUpperCase()
        ) {
          ShowError(
            input,
            `${getFieldName(input)}  must start with Upper case letter`
          );
        }
        if (/\d/.test(password.value) != true) {
          ShowError(
            input,
            `${getFieldName(input)}  must include at least one number`
          );
        }
        if (
          /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password.value) !=
          true
        ) {
          ShowError(
            input,
            `${getFieldName(
              input
            )}  must include at least one special charactar`
          );
        }
        if (/\s/.test(password.value) == true) {
          ShowError(input, `${getFieldName(input)}  can not contain spaces`);
        }
      }

      function CheckPasswordsMatch(input1, input2) {
        if (input1.value !== input2.value) {
          ShowError(input2, "Password do not match");
        }
      }

      function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
      }

      form.addEventListener('submit', (e) => {
        CheckRequired([username, email, password, password2]);
        CheckLenght(username, 3, 15);
        CheckPassword(password);
        CheckEmail(email);
          CheckPasswordsMatch(password, password2);
          if (count !== 0) {
              e.preventDefault();
          }
          else {
              alert("congratulation! you have joined successfully");
          }
      });