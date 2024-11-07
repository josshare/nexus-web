import React from "react";
import { Divider } from "@nextui-org/divider";

const Divid = () => {
  return (
    <div className="max-w-md">
      <div className="space-y-1">
        <h4 className="text-medium font-medium">NextUI Components</h4>
        <p className="text-small text-default-400">Beautiful, fast and modern React UI library.</p>
      </div>
      <Divider className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-small">
        <div>One way</div>
        <Divider orientation="vertical" />
        <div>Round trip</div>
        <Divider orientation="vertical" />
        <div>Multiple</div>
      </div>
    </div>
  );
};

export default Divid;
