import tw, { styled, css, theme } from 'twin.macro';
import Pagination from 'rc-pagination';

type MenuProps = {
  open: boolean;
};

// common styles
const dividerStyle = css`
  :after {
    content: '';
    display: block;
    height: 1px;
    width: 70%;
    background: rgba(255, 255, 255, 10%);
    position: absolute;
  }
`;
const overlayStyle = css`
  :after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: linear-gradient(90deg, hsla(222, 47%, 11%, 100%) 0%, hsla(222, 47%, 11%, 90%) 100%);
  }
`;

const containerStyle = css`
  max-width: 90%;
  margin: 0 auto;
  @media (min-width: 86.25em) {
    max-width: 80rem;
  }
`;
const TextShadowStyle = css`
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
`;
const primaryGradient = ({ whiteness = 0.2, color }: { whiteness?: number; color?: string }) => css`
  background: linear-gradient(180deg, rgba(255, 255, 255, ${whiteness}) 0%, rgba(255, 255, 255, 0) 100%), ${color ?? theme`colors.blueGray.700`};
`;
// common styles

// header styles
export const StyledHeader = styled.header`
  ${tw`bg-blueGray-900 text-white flex justify-between items-center text-2xl relative`}
  height:6.25rem;
  ${containerStyle}
`;
export const StyledNav = tw.nav`w-72 h-full flex justify-between items-center relative `;
export const StyledMenu = styled.ul<MenuProps>`
  ${tw`flex-1 flex flex-row justify-between z-40`}
  @media screen and (max-width: 768px) {
    width: 220px;
    height: 200px;
    ${tw`flex flex-col justify-center items-center rounded-2xl absolute top-full left-full bg-bg transform transition mt-2`}
    ${({ open }) => (open ? tw`opacity-100 -translate-x-full` : tw`opacity-0 translate-x-0`)}
      ${({ open }) => open && dividerStyle}
      li:first-of-type {
      ${tw`mb-12`};
    }
  }
`;
export const StyledBurger = styled.button<MenuProps>`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  ${tw`flex md:hidden`}
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: #effffa;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${({ open }) => (open ? `rotate(45deg)` : `rotate(0)`)};
    }

    :nth-of-type(2) {
      opacity: ${({ open }) => (open ? `0` : `1`)};
      transform: ${({ open }) => (open ? `translateX(20px)` : `translateX(0)`)};
    }

    :nth-of-type(3) {
      transform: ${({ open }) => (open ? `rotate(-45deg)` : `rotate(0)`)};
    }
  }
`;
// header styles

// hero styles

export const StyledHero = styled.section`
  position: relative;
  object-fit: cover;
  z-index: 1;
  padding: 4rem 0;
  ${overlayStyle};
`;
export const StyledHeroContainer = styled.div`
  ${tw`relative z-10 flex flex-col md:(flex-row)`};
  ${containerStyle}
`;
export const StyledPoster = styled.div`
  ${tw`mr-0 mb-5 md:(mr-10 mb-0 block)`}
  > div {
    /* margin: 0 auto; */
  }
`;
export const StyledContent = styled.div`
  ${tw`flex flex-col items-start text-white`}

  .title {
    ${tw`font-bold text-3xl mb-2 lg:text-5xl`}
    span {
      ${tw`font-normal text-xl opacity-60 lg:text-4xl`}
    }
  }
  .subTitle {
    ${tw`text-xs text-coolGray-400 font-bold mb-10 leading-6`}
    span {
      ${tw`mr-2 uppercase border-2 border-coolGray-400 rounded-sm px-2 py-px text-xs`}
    }
  }
  .overview {
    ${tw`font-semibold mb-4 text-xl lg:(text-2xl)`};
  }
  .description {
    ${tw`font-serif text-white text-base text-opacity-80 mb-10 lg:(text-lg )`}
    max-width:70ch;
  }
  .info {
    ${tw`flex flex-row flex-wrap gap-x-10 gap-y-5  mb-10 lg:(gap-x-14)`}
  }
  .creator {
    ${tw`flex flex-col`}
    h2 {
      ${tw`font-medium mb-2 text-lg lg:text-2xl`}
    }
    span {
      ${tw`font-normal text-base text-coolGray-400`}
    }
  }
  .rating {
    ${tw`flex flex-row items-start self-start lg:-mt-1`}
    > div {
      ${tw`w-6 h-6 lg:( w-8 h-8 )`}
    }
    p {
      ${tw`font-semibold text-xl tracking-widest ml-4 lg:(text-3xl)`}
    }
  }
  button {
    ${tw`border-2 rounded uppercase font-bold tracking-widest relative overflow-hidden hover:text-black`}
    width:200px;
    height: 48px;
    transition: color 0.25s 0s ease-in;
    :after {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      background: #fff;
      position: absolute;
      top: 0;
      left: -100%;
      transition: transform 0.25s ease-in;
      z-index: -1;
    }
    &:hover:after {
      transform: translateX(100%);
    }
  }
`;
// hero styles

// Episodes styles
export const StyledEpisodes = styled.section`
  ${tw`text-white pt-16`}
  ${containerStyle}
`;
export const StyledSectionTitle = tw.h2`text-4xl font-bold text-center mb-20`;
export const StyledGrid = styled.div`
  ${tw`grid grid-cols-1 gap-y-8 lg:(gap-x-8 grid-cols-3)`}
`;
export const StyledSeasonList = styled.ul`
  ${tw`flex flex-row flex-wrap content-start list-none gap-4 lg:(col-start-1 col-end-3 row-start-1 row-end-2)`}
  button {
    ${tw`font-bold text-base text-black bg-white rounded relative`}
    ${TextShadowStyle}
    height: 40px;
    width: 120px;
    opacity: 0.5;
    cursor: pointer;
    transition: opacity 0.25s ease-in;
    &:hover:not(.activeSe) {
      ${tw`opacity-80 animate-pulse`}
    }
    &.activeSe {
      opacity: 1;
      cursor: auto;
    }
    &:active:not(.activeSe) {
      ${tw`animate-none`}
    }
    &.activeSe:after {
      content: '';
      ${tw`absolute block w-3 h-3 bg-purple-700 rounded-full -right-1.5 -top-1.5`}
    }
    &.activeSe:before {
      content: '';
      ${tw`absolute block w-3 h-3 bg-purple-700 rounded-full -right-1.5 -top-1.5 opacity-75 animate-ping`}
    }
  }
`;

export const StyledEpisodeList = styled.aside`
  ${tw`bg-blueGray-800 rounded lg:( col-start-3 col-end-4 row-start-1 row-end-4)`}
  max-width: 400px;
  overflow: hidden;
  position: relative;
  :after {
    content: '';
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    background: linear-gradient(to top, rgba(15, 23, 42, 1) 0%, rgb(15, 23, 42, 0) 100%);
    transition: transform 0.5s linear;
  }
  &.scrollEnd:after {
    transform: translateY(100%);
  }

  h3 {
    ${tw`text-2xl font-bold py-4 text-center rounded-tr rounded-tl`}
    ${TextShadowStyle}
    ${primaryGradient}
  }

  ul {
    ${tw`py-8 px-4 flex flex-col gap-y-4 overflow-y-scroll`}
    height:500px;
    > li:last-of-type:after {
      content: '';
      display: block;
      height: 2em;
      margin-bottom: -2em;
    }
    button {
      ${TextShadowStyle}
      ${primaryGradient({ whiteness: 0.1 })}
      ${tw`text-base truncate text-left w-full py-2.5 px-5 rounded cursor-pointer transition-colors duration-300`}
      box-shadow: 0 2px 0 rgba(0, 0, 0, .1);
      &:hover {
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
        ${tw`bg-blueGray-800`}
      }
      &.activeEp {
        ${tw`text-black cursor-auto`}
        ${primaryGradient({ color: theme`colors.amber.400` })}
      }
      &:active:not(.activeEp) {
        background: none;
        box-shadow: 0 0 1px 0 hsla(0, 0%, 0%, 0.4) inset, 0 0 4px 0 hsla(0, 0%, 0%, 0.4) inset;
      }
      span {
        :first-of-type {
          ${tw`font-semibold`}
        }
        :last-of-type {
          ${tw`font-medium`}
        }
      }
    }
  }
`;
export const StyledVideoContainer = styled.div`
  /* background: ${theme`colors.blueGray.800`}; */
  ${tw`lg:(col-start-1 col-end-3 row-start-2)`}
`;
// Episodes styles

// Characters styles

export const StyledCharacters = styled.section`
  ${tw`text-white py-16`}
  ${containerStyle}
`;
export const StyledCharacterImg = styled.div`
  height: 150px;
  > div {
    ${tw`shadow-xl rounded-lg transform scale-125 -mt-4 lg:(origin-left scale-150 mt-0)`}
  }
`;
// Characters styles

// Pagination

export const StyledPagination = styled(Pagination)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  li {
    flex: 0 0 44px;
    ${tw`text-base font-bold bg-blueGray-800`}
    width: 44px;
    height: 44px;
    border-radius: 4px;
    padding: 4px;
    border: 2px solid transparent;
    transition: border 0.25s linear, color 0.25s linear;

    > * {
      width: 100%;
      height: 100%;
      display: inline-block;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &.rc-pagination-jump-prev button:after,
    &.rc-pagination-jump-next button:after {
      display: block;
      content: '•••';
    }
    &.rc-pagination-item {
      cursor: pointer;
    }
    &.rc-pagination-item-active {
      border-color: #ff0040;
      color: #ff0040;
    }
    &.rc-pagination-disabled {
      opacity: 0.4;
      cursor: not-allowed;
      > * {
        cursor: not-allowed;
      }
    }
  }
`;

// Pagination
