import styled from '@emotion/styled';



export const Container = styled.section`
  display: flex;
  height: 100vh;
`
export const Nav = styled.nav`
  flex: 1;
  display: flex;
  background-color: blue;
`

export const WorkspacePart = styled.div`
  flex: 0.5;
  background: red;
`

export const ChannelsPart = styled.div`
  flex: 1;
  background: #2F3136;
`

export const Main = styled.main`
  flex: 5;
`

export const Section = styled.section`
  display: flex;
  
`

export const Header = styled.header`
  background-color: #36393F;
  color: #fff;
  height: 60px;
`
export const ChatsPart = styled.article`
  flex: 4;
  height: calc(100vh - 40px);
  background-color: #36393F;
`

export const Messenger = styled.aside`
  flex: 1;
  height: calc(100vh - 40px);
  background-color: #2F3136;
`
export const Footer = styled.footer`
background-color: gray;
color: #fff;
height: 100px;
`



export const Workspaces = styled.div`
  padding-top: 15px;
  background: #202225;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const WorkspaceButton = styled.button`
  display: inline-block;
  width: 45px;
  height: 45px;
  border-radius: 20px;
  background: white;
  border: 3px solid white;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 700;
  color: black;
  cursor: pointer;
  
  &:hover {
    width: 50px;
    border-radius: 10px;
    transition: 0.6s;
  }
`;

export const CreateButton = styled.button`
display: inline-block;
width: 45px;
height: 45px;
border-radius: 20px;
background: white;
border: 3px solid white;
margin-bottom: 20px;
font-size: 28px;
font-weight: 700;
color: black;
cursor: pointer;

&:hover {
  width: 50px;
  border-radius: 10px;
  transition: 0.6s;
}
`
export const WorkspaceName = styled.button`
  height: 70px;
  border: none;
  width: 100%;
  font-size: 24px;
  background: transparent;
  color: white;
  cursor: pointer;
`;

export const MenuScroll = styled.div`
  height: calc(100vh - 102px);
  overflow-y: auto;
`;

export const WorkspaceModal = styled.div`
  padding: 10px 0 0;

  &>h2 {
    padding-left: 20px;
   
  }

  & > button {
    width: 100%;
    height: 28px;
    padding: 4px;
    border: none;
    background: transparent;
    border-top: 1px solid rgb(28, 29, 28);
    cursor: pointer;

    &:last-of-type {
      border-bottom: 1px solid rgb(28, 29, 28);
    }
  }
`;
export const RightMenu = styled.div`
  float: right;
`;



export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 5px;
  right: 16px;
`;

export const ProfileModal = styled.div`
  display: flex;
  padding: 20px;

  & img {
    display: flex;
  }

  & > div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  & #profile-name {
    font-weight: bold;
    display: inline-flex;
  }

  & #profile-active {
    font-size: 13px;
    display: inline-flex;
  }
`;

export const LogOutButton = styled.button`
  border: none;
  width: 100%;
  border-top: 1px solid rgb(29, 28, 29);
  background: transparent;
  display: block;
  height: 33px;
  padding: 5px 20px 5px;
  outline: none;
  cursor: pointer;
`;

// export const WorkspaceWrapper = styled.div`
//   display: flex;
//   flex: 1;
// `;

// export const Workspaces = styled.div`
//   width: 65px;
//   display: inline-flex;
//   flex-direction: column;
//   align-items: center;
//   background: #202225;
//   border-top: 1px solid rgb(82, 38, 83);
//   border-right: 1px solid rgb(82, 38, 83);
//   vertical-align: top;
//   text-align: center;
//   padding: 15px 0 0;
// `;

// export const Channels = styled.nav`
//   width: 260px;
//   display: inline-flex;
//   flex-direction: column;
//   background: #2f3136;
//   color: rgb(188, 171, 188);
//   vertical-align: top;

//   & a {
//     padding-left: 36px;
//     color: inherit;
//     text-decoration: none;
//     height: 28px;
//     line-height: 28px;
//     display: flex;
//     align-items: center;

//     &.selected {
//       color: white;
//     }
//   }

//   & .bold {
//     color: white;
//     font-weight: bold;
//   }

//   & .count {
//     margin-left: auto;
//     background: #cd2553;
//     border-radius: 16px;
//     display: inline-block;
//     font-size: 12px;
//     font-weight: 700;
//     height: 18px;
//     line-height: 18px;
//     padding: 0 9px;
//     color: white;
//     margin-right: 16px;
//   }

//   & h2 {
//     height: 36px;
//     line-height: 36px;
//     margin: 0;
//     text-overflow: ellipsis;
//     overflow: hidden;
//     white-space: nowrap;
//     font-size: 15px;
//   }
// `;

// export const WorkspaceName = styled.button`
//   height: 64px;
//   line-height: 64px;
//   border: none;
//   width: 100%;
//   text-align: left;
//   border-top: 1px solid rgb(82, 38, 83);
//   border-bottom: 1px solid rgb(82, 38, 83);
//   font-weight: 900;
//   font-size: 24px;
//   background: transparent;
//   text-overflow: ellipsis;
//   overflow: hidden;
//   white-space: nowrap;
//   padding: 0;
//   padding-left: 16px;
//   margin: 0;
//   color: white;
//   cursor: pointer;
// `;

// export const MenuScroll = styled.div`
//   height: calc(100vh - 102px);
//   overflow-y: auto;
// `;

// export const WorkspaceModal = styled.div`
//   padding: 10px 0 0;

//   & h2 {
//     padding-left: 20px;
//   }

//   & > button {
//     width: 100%;
//     height: 28px;
//     padding: 4px;
//     border: none;
//     background: transparent;
//     border-top: 1px solid rgb(28, 29, 28);
//     cursor: pointer;

//     &:last-of-type {
//       border-bottom: 1px solid rgb(28, 29, 28);
//     }
//   }
// `;

// export const Chats = styled.div`
//   flex: 1;
// `;

// export const AddButton = styled.button`
//   color: white;
//   font-size: 24px;
//   display: inline-block;
//   width: 40px;
//   height: 40px;
//   background: transparent;
//   border: none;
//   cursor: pointer;
// `;

// export const WorkspaceButton = styled.button`
//   display: inline-block;
//   width: 45px;
//   height: 45px;
//   border-radius: 20px;
//   background: white;
//   border: 3px solid #3f0e40;
//   margin-bottom: 15px;
//   font-size: 18px;
//   font-weight: 700;
//   color: black;
//   cursor: pointer;
  
//   &:hover {
//     width: 50px;
//     border-radius: 10px;
//     transition: 0.6s;
//   }
// `;
