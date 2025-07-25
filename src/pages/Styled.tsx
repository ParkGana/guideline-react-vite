import type { theme } from '@/styles/theme';
import styled, { css } from 'styled-components';

const Color = styled.div<{ $color: keyof typeof theme.color }>`
  ${({ theme, $color }) => `
    width: 40px;
    height: 40px;
    background-color: ${theme.color[$color]};
  `}
`;

const Typography = styled.p<{ $text: keyof typeof theme.typography }>`
  ${({ theme, $text }) => css`
    ${theme.typography[$text]};
  `}
`;

const StyledPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <p className="w-fit text-xl font-bold border-2 border-gray-900 px-2 py-1">COLOR</p>
        <div className="flex">
          <Color $color="gray100" />
          <Color $color="gray200" />
          <Color $color="gray300" />
          <Color $color="gray400" />
          <Color $color="gray500" />
          <Color $color="gray600" />
          <Color $color="gray700" />
          <Color $color="gray800" />
          <Color $color="gray900" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="w-fit text-xl font-bold border-2 border-gray-900 px-2 py-1">TYPOGRAPHY</p>
        <div>
          <Typography $text="title">TEXT</Typography>
          <Typography $text="label">TEXT</Typography>
          <Typography $text="body">TEXT</Typography>
          <Typography $text="caption">TEXT</Typography>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="w-fit text-xl font-bold border-2 border-gray-900 px-2 py-1">TYPOGRAPHY &#40;반응형&#41;</p>
        <div>
          <Typography $text="responsiveTitle">TEXT</Typography>
          <Typography $text="responsiveLabel">TEXT</Typography>
          <Typography $text="responsiveBody">TEXT</Typography>
          <Typography $text="responsiveCaption">TEXT</Typography>
        </div>
      </div>
    </div>
  );
};

export default StyledPage;
