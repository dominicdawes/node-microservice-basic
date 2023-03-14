// location-services.js


// All business Logic will be here
class LocationService {
    async sumZip(inputs){
        const zip1 = parseInt(inputs.zipcode1)  // cast as an int
        const zip2 = parseInt(inputs.zipcode2)

        try {
            const sum = zip1 + zip2
            return sum
        } catch(error){
            console.log(error)
        }
    }
}

// exports
module.exports = LocationService;