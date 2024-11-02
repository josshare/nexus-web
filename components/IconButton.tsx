import React from "react";
import { Button } from "@nextui-org/button";
import HeartIcon from './HeartIcon';

const IconButtons: React.FC = () => {
  return (
    <div className="flex gap-4 items-center">
      <Button isIconOnly color="danger" aria-label="Like">
        <HeartIcon />
      </Button>    
      <Button isIconOnly color="warning" variant="faded" aria-label="Take a photo">
        {/* Add your icon here */}
      </Button>
    </div>
  );
};

export default IconButtons;
