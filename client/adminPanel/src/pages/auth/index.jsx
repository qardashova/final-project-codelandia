import { Grid2, Typography } from "@mui/material";
import loginImage from "../../assets/login.jpeg";
import "./style.scss";
import { FormProvider, useForm, Form } from "react-hook-form";
import CustomButton from "../../components/button";
import InputUseForm from "../../components/input/InputUseForm";
import { useAppDispatch } from "../../redux/store";
import { login } from "../../redux/actions/authActions";
const Login = () => {
  const methods = useForm();
  const dispatch = useAppDispatch();

  const handleSubmit = methods.handleSubmit((data) => {
    dispatch(login(data))
  });

  return (
    <Grid2 container sx={{ minHeight: "100vh" }}>
      <Grid2
        size={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" component="h3" sx={{ marginBottom: "16px" }}>
          Welcome !
        </Typography>
        <FormProvider {...methods}>
          <Form>
            <Grid2 container spacing={2}>
              <Grid2 size={12}>
                <InputUseForm name={"username"} label={"Username"} />
              </Grid2>
              <Grid2 size={12}>
                <InputUseForm
                  name={"password"}
                  label={"Password"}
                  type={"password"}
                />
              </Grid2>
              <Grid2 size={12}>
                <CustomButton
                  variant={"contained"}
                  fullWidth
                  onClick={handleSubmit}
                >
                  Login
                </CustomButton>
              </Grid2>
            </Grid2>
          </Form>
        </FormProvider>
      </Grid2>
      <Grid2
        size={6}
        sx={{
          backgroundImage: `url(${loginImage})`,
          backgroundSize: "cover",
        }}
      ></Grid2>
    </Grid2>
  );
};

export default Login;
