import { IconButton } from "@chakra-ui/react";
import { EnvelopeSimple } from "phosphor-react";
import { FC } from "react";
import { useSendInvitationMail } from "../../hooks/Invitation";
import { useCustomToast } from "../../hooks/Toast";
import { isSmartPhoneScreen } from "../../styles/Responsive";
import { Invitation } from "../../types/Invitation";

type props = {
  invitation: Invitation;
};
export const SendInvitationMailButton: FC<props> = ({ invitation }) => {
  const { sendInvitationMail, isLoading } = useSendInvitationMail();
  const { showToast } = useCustomToast();
  const onClick = () => {
    sendInvitationMail(invitation)
      .then(() => showToast("メールを再送信しました！", "success"))
      .catch((e) => showToast(e.message, "error"));
  };
  return (
    <IconButton
      icon={<EnvelopeSimple />}
      aria-label="メール送信"
      rounded="full"
      size={isSmartPhoneScreen() ? "xs" : "sm"}
      isLoading={isLoading}
      onClick={onClick}
    />
  );
};
