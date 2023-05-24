import TextEditor from "./TextEditor";
import { Button } from "@material-tailwind/react";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import FilterDramaOutlinedIcon from '@mui/icons-material/FilterDramaOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import React from "react";
import profileLogo from "./images/profile.jpg";
import docLogo from "./images/docs_logo.png";
function Doc() {
  return (
    <div>
      <header className="flex justify-between items-center p-2 pb-1">
        <img src={docLogo} className="h-10 w-10" alt="doc-logo" />
        <div className="flex-grow px-2">
          <div className="flex">
            <h1 className="flex text-xl ml-1 text-gray-800">
              {" "}
              New Document         
            </h1>
           <div className="flex gap-2 ml-4 mt-2">
              <StarRateOutlinedIcon fontSize="small" />
            </div>
            <div className="flex gap-2 ml-4 mt-2">
              <CreateNewFolderOutlinedIcon fontSize="small" />
            </div>
            <div className="flex gap-2 ml-4 mt-2">
              <CloudDoneOutlinedIcon fontSize="small" />
            </div>
            
            
            
          </div>
          <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
            <p className="option">File</p>
            <p className="option">View</p>
            <p className="option">Edit</p>
            <p className="option">Insert</p>
            <p className="option">Format</p>
            <p className="option">Tools</p>
            <p className="option">Extensions</p>
            <p className="option">Help</p>
          </div>
        </div>{" "}
        <div className="flex gap-8 mr-4">

        < RestoreOutlinedIcon className="icons mt-2" />
          <InsertCommentOutlinedIcon className="icons mt-2" />


          <div className="flex">
            <VideoCallOutlinedIcon fontSize="large" className="icons" />
            <ArrowDropDownOutlinedIcon className="icons" />
          </div>
        </div>
        <Button
          className="hidden md:inline-flex h-10 rounded-full bg-[#C2E7FF]"
        >
          <LockOutlinedIcon fontSize="small" className="!-mt-1 text-black" />
          <h5 className="ml-1 -mt-1 text-black text-sm font-normal">Share</h5>
        </Button>
       
        <img
          className="cursor-pointer rounded-full h-10 w-10 ml-6 mr-3"
          src={profileLogo}
          alt="profile-logo"
        />
      </header>

      <TextEditor />
    </div>
  );
}

export default Doc;
