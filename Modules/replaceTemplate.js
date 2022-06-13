module.exports = (temp, student) => {
    let output = temp.replace(/{%STUDENT_NAME%}/g, student.name)
    output = output.replace(/{%STUDENT_ID%}/g, student.id)
    output = output.replace(/{%STUDENT_ROLL%}/g, student.rollNo)
    output = output.replace(/{%STUDENT_FATHER__NAME%}/g, student.fathersName)
    output = output.replace(/{%STUDENT_ADDRESS%}/g, student.address)
    output = output.replace(/{%STUDENT_REGISTRATION__NO%}/g, student.registrationNumber)
    output = output.replace(/{%STUDENT_COURSE%}/g, student.course)
    output = output.replace(/{%STUDENT_STREAM%}/g, student.stream)
    output = output.replace(/{%STUDENT_DOB%}/g, student.dateOfBirth)
    output = output.replace(/{%STUDENT_GENDER%}/g, student.gender)
    output = output.replace(/{%STUDENT_FORMAL__IMAGE%}/g, student.formalImage)
    output = output.replace(/{%STUDENT_INFORMAL__IMAGE%}/g, student.informalImage)
    output = output.replace(/{%STUDENT_SSC__PERCENTAGE%}/g, student.percentageSSC)
    output = output.replace(/{%STUDENT_HSC__PERCENTAGE%}/g, student.percentageHSC)
    output = output.replace(/{%STUDENT_SSC__YEAR%}/g, student.yearOfPassingSSC)
    output = output.replace(/{%STUDENT_HSC__YEAR%}/g, student.yearOfPassingHSC)
    if(student.percentageDiploma == null){
        output = output.replace(/{%NOT_DIPLOMA%}/g, 'not-diploma')
    }
    output = output.replace(/{%STUDENT_DIPLOMA__PERCENTAGE%}/g, student.percentageDiploma)
    output = output.replace(/{%STUDENT_CONTACT__NO%}/g, student.contactNumber)
    output = output.replace(/{%STUDENT_EMAIL%}/g, student.email)
    output = output.replace(/{%STUDENT_INTEREST%}/g, student.interestedIn)
    output = output.replace(/{%STUDENT_SEM1GPA%}/g, student.sem1SGPA)
    output = output.replace(/{%STUDENT_SEM2GPA%}/g, student.sem2SGPA)
    output = output.replace(/{%STUDENT_SEM3GPA%}/g, student.sem3SGPA)
    output = output.replace(/{%STUDENT_SEM4GPA%}/g, student.sem4SGPA)
    output = output.replace(/{%STUDENT_SEM5GPA%}/g, student.sem5SGPA)
    output = output.replace(/{%STUDENT_CGPA%}/g, student.overallCGPA)
    output = output.replace(/{%STUDENT_BE-PASSING__YEAR%}/g, student.yearOfPassingBE)
    output = output.replace(/{%SLUG%}/g, student.slug);

    return output
}
