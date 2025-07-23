import { useEffect, useRef } from 'react';
import { MdClose } from 'react-icons/md';

type ModalLayoutProps = {
  children: React.ReactNode;
  handleClose: () => void;
};

const ModalLayout = ({ children, handleClose }: ModalLayoutProps) => {
  const isMouseUpAndDownOnBackground = useRef(false);

  /* 모달이 열려있는 경우 페이지 스크롤 막기 */
  useEffect(() => {
    const originOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originOverflow;
    };
  }, []);

  /* Mouse Down이 Background 영역에서 발생 */
  const handleMouseDownOnBackground = () => {
    isMouseUpAndDownOnBackground.current = true;
  };

  /* Mouse Up이 Background 영역에서 발생 */
  const handleMouseUpOnBackground = () => {
    if (isMouseUpAndDownOnBackground.current) handleClose();
    isMouseUpAndDownOnBackground.current = false;
  };

  /* Mouse Down이 Modal 영역에서 발생 */
  const handleMouseDownOnModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    isMouseUpAndDownOnBackground.current = false;
  };

  /* Mouse Up이 Modal 영역에서 발생 */
  const handleMouseUpOnModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    isMouseUpAndDownOnBackground.current = false;
  };

  return (
    <div
      className="fixed inset-0 z-50 w-screen h-screen flex items-center justify-center bg-black/50"
      onMouseDown={handleMouseDownOnBackground}
      onMouseUp={handleMouseUpOnBackground}
    >
      <div
        className="w-[90vw] max-w-4xl rounded-md bg-white"
        onMouseDown={handleMouseDownOnModal}
        onMouseUp={handleMouseUpOnModal}
      >
        <div className="flex justify-end border-b border-gray-200 p-5">
          <MdClose size={20} onClick={handleClose} className="cursor-pointer" />
        </div>
        <div className="max-h-[80vh] m-5 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default ModalLayout;
