"use client"

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Aos from 'aos';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Heading from '../main/Heading';
import PhoneInput from 'react-phone-input-2';
import RefreshIcon from '@mui/icons-material/Refresh';




interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  countryCode?: string;
  email: string;
  phone: string;
  message: string;
  services: string[];
};

type SubmissionStatus = 'idle' | 'submitting' | 'success';


const ContactUsForm = () => {
      const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        company: "",
        country: "",
        email: "",
        phone: "",
        message: "",
        services: [],
      });
    
      const [status, setStatus] = useState<SubmissionStatus>("idle"); // 'idle', 'submitting', 'success'
      const router = useRouter()
    
      
    useEffect(() => {
      Aos.init({ once: true });
    }, []);
    
    
      const handleChange = (e:  ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
    
        if (type === "checkbox") {
          if (checked) {
            setFormData(prevState => ({
              ...prevState,
              services: [...prevState.services, value]
            }))
          } else if (!checked) {
            setFormData(prevState=>({
              ...prevState,
              services: prevState.services.filter((service) => service !== value)
            }))
          }
        } else {
          setFormData(prevState => ({
            ...prevState,
            [name]: value
          }));
        }
      };
    
      const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("submitting"); // Set status to 'submitting'
        
        const finalData = {
          ...formData,
          subject : 'New Message from Contact Form',
          services: Array.isArray(formData.services)
            ? formData.services.join(', ')  // convert to string
            : formData.services,
        };
        // console.log('-------------', finalData)
    
    
        const res = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalData),
        });
    
        const data = await res.json();
    
        if (res.status === 200) {
          setStatus("success"); // Set status to 'success'
          setFormData({
            firstName: "",
            lastName: "",
            company:"",
            country:"",
            email: "",
            countryCode:"",
            phone: "",
            message: "",
            services: [],
          });
          toast.success((data?.message as string) || 'Email sent successfully')
          console.log(data)
          router.push('/thanks')
        }
        if(res.status === 400) {
          console.log(data)
          toast.error(data?.error || 'Something went wrong' )
          setStatus("idle"); // Reset status to 'idle' if submission fails
        }
        
      };


  return (
    <div>
      {/* form and map */}
      <div className="flex flex-col w-full h-full gap-4 px-8 py-4 lg:flex-row">


        {/* form */}
        <section className="flex-[0.5] mx-auto">
          <div className="text-center">
            <div className="flex flex-col items-center">

              <form
                onSubmit={handleSubmit}
                data-aos="fade-up"
                data-aos-delay="400"
                className="flex flex-col gap-8 items-center px-10 lg:px-20 w-auto max-w-[600px] xl:max-w-[800px]"
              >
                <Heading
                  customClass="mx-auto"
                  subHeading="Get in touch"
                  mainHeading="We Are Always Ready For Your Solution"
                />

                <div className="flex flex-col w-full gap-8 px-2 xl:flex-row xl:gap-2">
                  <div className="flex flex-col items-start flex-[0.5]">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md outline-none max-w-[300px]"
                      required
                    />
                  </div>
                  <div className="flex flex-col items-start flex-[0.5]">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md outline-none max-w-[300px]"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full gap-8 px-2 xl:flex-row xl:gap-2">
                  <div className="flex flex-col items-start flex-[0.5]">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md outline-none max-w-[300px]"
                    />
                  </div>
                  <div className="flex flex-col items-start flex-[0.5]">
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      name="country"
                      placeholder="Your Country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md outline-none max-w-[300px]"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full gap-8 px-2 xl:flex-row xl:gap-2">
                  <div className="flex flex-col items-start flex-[0.5]">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md outline-none max-w-[300px]"
                      required
                    />
                  </div>
                  <div className="flex flex-col items-start flex-[0.5]">
                    <label htmlFor="phone">Phone</label>
                    <PhoneInput
                      country={'us'}
                      value={formData.phone}
                      containerClass="w-full flex max-w-[200px] text-base"
                      onChange={(phone) => setFormData(prev => ({ ...prev, phone }))}
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start w-full gap-4">
                  <h4>Services</h4>
                  <div className="flex flex-col w-full gap-4 md:flex-row xl:px-4">
                    <div className="flex flex-col gap-4 flex-[0.5]">
                      <div className="flex gap-2">
                        <input type="checkbox" name="services" id="websiteDevelopment" value="websiteDevelopment" onChange={(e) => handleChange(e)} />
                        <label htmlFor="websiteDevelopment">Website Development</label>
                      </div>
                      <div className="flex gap-2">
                        <input type="checkbox" name="services" id="appDevelopment" value="appDevelopment" onChange={(e) => handleChange(e)} />
                        <label htmlFor="appDevelopment">App Development</label>
                      </div>
                      <div className="flex gap-2">
                        <input type="checkbox" name="services" id="crm/erpDevelopment" value="crm/erpDevelopment" onChange={(e) => handleChange(e)} />
                        <label htmlFor="crm/erpDevelopment">CRM/ERP Development</label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 flex-[0.5]">
                      <div className="flex gap-2">
                        <input type="checkbox" name="services" id="digitalMarketing" value="digitalMarketing" onChange={(e) => handleChange(e)} />
                        <label htmlFor="digitalMarketing">Digital Marketing</label>
                      </div>
                      <div className="flex gap-2">
                        <input type="checkbox" name="services" id="cloudServices" value="cloudServices" onChange={(e) => handleChange(e)} />
                        <label htmlFor="cloudServices">Cloud Services</label>
                      </div>
                      <div className="flex gap-2">
                        <input type="checkbox" name="services" id="others" value="others" onChange={(e) => handleChange(e)} />
                        <label htmlFor="others">Others</label>
                      </div>
                    </div>

                  </div>
                </div>

                <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-2 border rounded-md outline-none" placeholder="Message"></textarea>

                <button type="submit" className="bg-[#10410F] w-full md: text-white p-3 rounded-md h-12">
                  {status === "submitting" ? <RefreshIcon className="rotate" /> : "Send"}
                </button>
                {status === "success" ? <p>Thank you for contacting us, we will reach back to you in a short time.</p> : ''}
              </form>
            </div>
          </div>
        </section>


        {/* map */}
        <section className="flex flex-[0.5] justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3046.8723181040964!2d-76.72945592431364!3d40.21190306808095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1743246247315!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full max-w-[600px] xl:max-w-[700px]"
          ></iframe>
        </section>
      </div>
    </div>
  )
}

export default ContactUsForm
