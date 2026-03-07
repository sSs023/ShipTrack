import {
  addToast,
  Button,
  Card,
  Checkbox,
  Divider,
  Form,
  Input,
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
      addToast({
        severity: "success",
        title: t("login.loginSuccess"),
      });
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
        <Input
          labelPlacement="outside-top"
          label={
            <span className="text-sm font-semibold">{t("login.email")}</span>
          }
          placeholder={t("login.emailPlaceholder")}
          required
          variant="faded"
          startContent={<FaRegEnvelope className="text-muted-light mr-1" />}
          name="email"
        />
        <Input
          labelPlacement="outside-top"
          label={
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">
                {t("login.password")}
              </span>
              <span className="text-accent text-xs font-semibold">
                {t("login.forgotPassword")}
              </span>
            </div>
          }
          placeholder="••••••••"
          type={visible ? "text" : "password"}
          variant="faded"
          name="password"
          required
          startContent={<MdLockOutline className="text-muted mr-1" />}
          endContent={
            <button
              type="button"
              className="text-muted cursor-pointer"
              onClick={() => setVisible(!visible)}
            >
              {!visible ? <FiEye /> : <FiEyeOff />}
            </button>
          }
        />
        <Checkbox className="mb-5">{t("login.rememberDevice")}</Checkbox>
        <Button
          type="submit"
          size="lg"
          className="bg-accent shadow-accent z-9999 w-full text-base font-bold text-white"
          isLoading={isPending}
        >
          {t("login.signIn")} <FiArrowRight />
        </Button>
      </Form>
      <Divider />
      <div className="text-muted flex items-center justify-center gap-2 text-xs uppercase">
        <IoShieldCheckmarkOutline className="text-sm" />
        {t("login.secureConnection")}
      </div>
    </Card>
  );
}
