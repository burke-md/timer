// not producing sound
// process.stdout.write('\x07');

const timesArr = process.argv.slice(2)
//Edge case: No numbers(alarm times) given
  if (timesArr.length === 0) {
    process.exit()
  } else {
    console.log("length of input array is: ", timesArr.length)
  }

  for ( const alarm of timesArr) {

    //Edge case: Input MUST be positive number
    if ( typeof Number(alarm) === "number" && alarm > 0) {
      console.log("type of array el is: ", typeof alarm)
      setTimeout(() => {        
        process.stdout.write("alarm sound\n");
      }, alarm)
    }
}
