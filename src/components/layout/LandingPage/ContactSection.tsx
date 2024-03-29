import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { AppContainer } from "../AppContainer";
import { successToast } from "../../common/NotificationToast";
import {
  Input,
  InputContainer,
  InputError,
  Label,
  TextArea,
} from "../../common/Inputs";
import { PrimaryButton } from "../../common/Button";
import { SocialIconsComponent } from "./SocialIconsComponent";
import { SectionHeader } from "./SectionHeader";
import styled from "styled-components";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Kindly input your name"),
  lastName: Yup.string().required("Kindly input your name"),
  email: Yup.string()
    .required("Kindly input your email")
    .email("Kindly input a valid email"),
  message: Yup.string().required("You need to input your message"),
});
const formOptions = { resolver: yupResolver(validationSchema) };

interface IButton {
  className?: string;
  size?: "small" | "medium" | "large";
}
const ContactButton = styled.a.attrs<IButton>(() => ({
  className: `flex justify-center items-center shadow-md`,
}))<IButton>`
  background: ${(props) => props.theme.colors.primaryBlue};
  min-width: ${(props) =>
    props.size === "small"
      ? "100px"
      : props.size === "medium"
      ? "120px"
      : "150px"};
  color: #ffffff;
  border: 2px solid ${(props) => props.theme.colors.primaryBlue};
  border-radius: 7px;
  padding: ${(props) =>
    props.size === "small"
      ? "8px 10px"
      : props.size === "large"
      ? "12px 14px"
      : "10px 12px"};
  font-weight: bold;
  transition: all 0.3s ease;
  display: inline-block;
  outline: none;
  text-align: center;
  font-size: ${(props) =>
    props.size === "small"
      ? "0.8rem"
      : props.size === "large"
      ? "1.5rem"
      : "1rem"};

  &:disabled {
    cursor: wait;
  }
`;

export const ContactSection = () => {
  const { register, handleSubmit, setError, formState, control } =
    useForm(formOptions);
  const { errors } = formState;

  const handleContactForm: SubmitHandler<any> = async (value) => {
    // Send http request with form data
    console.log(value);
    successToast({ message: "Your message has been received!" });
  };

  return (
    <div className="w-full py-20" id="contact-us">
      <AppContainer>
        <div className="pb-10">
          <div className="text-center">
            <SectionHeader data-aos="fade-down" data-aos-delay="500">
              Get In Touch
            </SectionHeader>
            <p data-aos="fade-down" data-aos-delay="700" className="text-lg">
              Have an inquiry or some feedback for us? Kindly fill the form
              below to reach our team.
            </p>
          </div>
          <div className="pt-10 max-w-3xl mx-auto">
            {/* <form className="mt-5" onSubmit={handleSubmit(handleContactForm)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <InputContainer>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    // placeholder=""
                    type="text"
                    {...register("firstName")}
                    name="firstName"
                  />
                  <InputError>{errors.firstName?.message}</InputError>
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    // placeholder=""
                    type="text"
                    {...register("lastName")}
                    name="lastName"
                  />
                  <InputError>{errors.lastName?.message}</InputError>
                </InputContainer>
              </div>
              <InputContainer>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  //   placeholder=""
                  type="email"
                  {...register("email")}
                  name="email"
                />
                <InputError>{errors.email?.message}</InputError>
              </InputContainer>
              <InputContainer>
                <Label htmlFor="message">Message</Label>
                <TextArea
                  //   placeholder=""
                  {...register("message")}
                  name="message"
                />
                <InputError>{errors.message?.message}</InputError>
              </InputContainer>
            
            </form> */}
            <InputContainer
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ContactButton href="mailto:support@dotlaunch.io">
                Get In Touch
              </ContactButton>
            </InputContainer>
          </div>
        </div>
        {/* <div
          className="text-center py-20 px-5 rounded-2xl mt-10 space-y-4"
          style={{
            background:
              'linear-gradient(90deg, rgb(68, 129, 235) 0%, rgb(131, 0, 255) 100%)',
          }}
        >
          <h3 className="font-bold text-2xl md:text-3xl">
            Join Our Social Channels To Stay Updated
          </h3>
          <SocialIconsComponent />
        </div> */}
      </AppContainer>
    </div>
  );
};
