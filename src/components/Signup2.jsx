import React from 'react'

const Signup2 = () => {
    return (
        <div className="main">
            <div class="form-container">
                <div className='head'>
                    <h4 className='font-bold'>We're excited to collaborate with you in refining your recruitment journey.</h4>
                    <p className='font-regular'>Crafting an enticing look to attract top-tier talent.</p>
                </div>
                <div id="registration-form">

                    <div class="form-group">
                        <label for="firstname" className='font-medium'>First Name:</label>
                        <input type="text" id="firstname" name="firstname" placeholder="What is your first name?" required />
                    </div>
                    <div class="form-group">
                        <label for="lastname" className='font-medium'>Last Name:</label>
                        <input type="text" id="lastname" name="lastname" placeholder="What is your last name?" required />
                    </div>
                    <div class="form-group">
                        <label for="email" lassName='font-medium'>Email:</label>
                        <input type="email" id="email" name="email" placeholder="Tell Us your E-mail ID" required />
                    </div>
                    <div class="form-group">
                        <label for="password" lassName='font-medium'>Password:</label>
                        <input type="password" id="password" name="password" placeholder='Minimum 6 characters' required />
                    </div>
                    <div class="form-group">
                        <label className='font-medium'>Gender:</label>
                        <div className='gender'>
                            <input type="radio" id="male" name="gender" value="male" required />
                            <label for="male" className='font-regular'>Male</label>
                            <input type="radio" id="female" name="gender" value="female" required />
                            <label for="female" className='font-regular'>Female</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="mobile" className='font-medium'>Mobile Number:</label>
                        <input type="tel" id="mobile" name="mobile" pattern="[0-9]{10}" placeholder='Enter your mobile number' required />
                    </div>
                    {/* <div class="form-group">
                        <label for="job-role" lassName='font-medium'>Job Role:</label>
                        <select id="job-role" name="job-role" required>
                            <option value="">Select Job Role</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="manager">Manager</option>
                            <option value="other">Other</option>
                        </select>
                    </div> */}
                    <div class="form-group">
                    <label for="job-role" className='font-medium'>Select Categories:</label>
                        <label for="checkbox1" className='font-regular'>
                            <input type="checkbox" id="checkbox1" name="checkbox1" value="Option 1"/> Management
                        </label>
                        <label for="checkbox2" className='font-regular'>
                            <input type="checkbox" id="checkbox2" name="checkbox2" value="Option 2"/> Marketing
                        </label>
                        <label for="checkbox3" className='font-regular'>
                            <input type="checkbox" id="checkbox3" name="checkbox3" value="Option 3"/> Research and development
                        </label>
                        <label for="checkbox3" className='font-regular'>
                            <input type="checkbox" id="checkbox3" name="checkbox3" value="Option 3"/> Personal/Household
                        </label>
                    </div>

                    <button type="submit" lassName='font-medium'>Sign Up</button>
                </div>
            </div>
        </div>


    )
}

export default Signup2
