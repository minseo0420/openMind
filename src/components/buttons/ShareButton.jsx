import { Toaster, toast } from "sonner";
import styled from "styled-components";

import { shareToFacebook, shareToKakao } from "../../utils/shareToSns";
import SVG from "../common/IconMapping";

function LinkButton() {
  const handleClickToCopyUrl = (text) => {
    const $textarea = document.createElement("textarea");

    document.body.appendChild($textarea);

    $textarea.value = text;
    $textarea.select();

    document.execCommand("copy");
    document.body.removeChild($textarea);
  };

  const handleClickToShareFacebook = () => {
    shareToFacebook();
  };

  const handleClickToShareKakao = () => {
    shareToKakao();
  };

  return (
    <LinkList>
      <LinkItem color="var(--Brown-40)">
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "var(--Brown-10, #f5f1ee)",
              color: "var(--Brown-40, #542f1a)",
            },
            className: "class",
          }}
        />
        <Button
          onClick={() => {
            toast.success("URL이 복사되었습니다", {
              cancel: {
                label: "취소",
                background: "black",
              },
            });
            handleClickToCopyUrl(window.location.href);
          }}
          color="var(--Brown-40)"
        >
          {<SVG.Link fill="white" width={18} />}
        </Button>
      </LinkItem>
      <LinkItem color="var(--Yellow-50)">
        <Button onClick={handleClickToShareKakao} color="var(--Yellow-50)">
          {<SVG.Kakaotalk width={18} />}
        </Button>
      </LinkItem>
      <LinkItem color="var(--Blue-50)">
        <Button onClick={handleClickToShareFacebook} color="var(--Blue-50)">
          {<SVG.Facebook fill="white" width={18} />}
        </Button>
      </LinkItem>
    </LinkList>
  );
}

export default LinkButton;

const Button = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  background-color: ${(props) => props.color};
`;

const LinkList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;

const LinkItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  background-color: ${(props) => props.color};

  & svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
