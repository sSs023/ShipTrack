import {
  toast,
  Button,
  Card,
  Checkbox,
  Separator,
  Form,
  TextField,
  Label,
  InputGroup,
  FieldError,
  Spinner,
} from "@heroui/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { loginWithEmailAndPassword } from "../api/login-api";
import { useAuth } from "../model/use-auth";
import { useRouter } from "@tanstack/react-router";

export default function LoginForm() {
  const [visible, setVisible] = useState(false);
  const { navigate } = useRouter();
  const { login } = useAuth();
  const { t } = useTranslation();

  const { mutate, isPending } = useMutation({
    mutationKey: ["signInWithPassword"],
    mutationFn: loginWithEmailAndPassword,
    onSuccess: (data) => {
      toast.success(t("login.loginSuccess"));
      login(data.token, data.token);
      navigate({ to: "/" });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = Object.fromEntries(
      new FormData(e.currentTarget),
    );

    mutate({
      email: email as string,
      password: password as string,
    });
  };

  return (
    <Card className="space-y-8 p-8">
      <div className="space-y-2">
        <h2 className="text-xl font-bold">{t("login.welcomeBack")}</h2>
        <p className="text-muted text-sm">{t("login.enterCredentials")}</p>
      </div>
      <Form onSubmit={handleSubmit} className="gap-0 space-y-5">
        <TextField name="email" isRequired>
          <Label className="text-sm font-semibold">{t("login.email")}</Label>
          <InputGroup>
            <InputGroup.Prefix>
              <FaRegEnvelope className="text-muted-light mr-1" />
            </InputGroup.Prefix>
            <InputGroup.Input placeholder={t("login.emailPlaceholder")} />
          </InputGroup>
          <FieldError />
        </TextField>
        <TextField
          name="password"
          type={visible ? "text" : "password"}
          isRequired
        >
          <Label>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">
                {t("login.password")}
              </span>
              <span className="text-accent text-xs font-semibold">
                {t("login.forgotPassword")}
              </span>
            </div>
          </Label>
          <InputGroup>
            <InputGroup.Prefix>
              <MdLockOutline className="text-muted mr-1" />
            </InputGroup.Prefix>
            <InputGroup.Input placeholder="••••••••" />
            <InputGroup.Suffix>
              <button
                type="button"
                className="text-muted cursor-pointer"
                onClick={() => setVisible(!visible)}
              >
                {!visible ? <FiEye /> : <FiEyeOff />}
              </button>
            </InputGroup.Suffix>
          </InputGroup>
          <FieldError />
        </TextField>
        <Checkbox className="mb-5" id="remember">
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Content>
            <Label htmlFor="remember">{t("login.rememberDevice")}</Label>
          </Checkbox.Content>
        </Checkbox>
        <Button
          type="submit"
          size="lg"
          className="bg-accent shadow-accent z-9999 w-full text-base font-bold text-white"
          isPending={isPending}
        >
          {({ isPending: loading }) => (
            <>
              {loading && <Spinner color="current" size="sm" />}
              {t("login.signIn")} <FiArrowRight />
            </>
          )}
        </Button>
      </Form>
      <Separator />
      <div className="text-muted flex items-center justify-center gap-2 text-xs uppercase">
        <IoShieldCheckmarkOutline className="text-sm" />
        {t("login.secureConnection")}
      </div>
    </Card>
  );
}
