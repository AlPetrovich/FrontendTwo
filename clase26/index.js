async function algo(){
    const { value: email } = await Swal.fire({
        title: 'Input email address',
        input: 'email',
        inputLabel: 'Your email address',
        inputPlaceholder: 'Enter your email address'
      })
      console.log(email)
}

algo();
  
//   if (email) {
//     Swal.fire(`Entered email: ${email}`)
// }

console.log("Estoy fuera")