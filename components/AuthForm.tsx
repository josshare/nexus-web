import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import DatePick from "./DatePick";
import IconButtons from "./IconButton";
import { Link } from "@nextui-org/link";

const AuthForm: React.FC = () => {
  const [selected, setSelected] = React.useState<React.Key>("login");

  return (
    <div className="flex flex-col w-full">
      <Card className="max-w-full w-[340px] h-[400px]">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Options"
            selectedKey={selected}
            onSelectionChange={setSelected}
            color="primary"
            variant="underlined"
            classNames={{
              tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
              cursor: "w-full bg-[#22d3ee]",
              tab: "max-w-fit px-0 h-12",
              tabContent: "group-data-[selected=true]:text-[#06b6d4]",
            }}
          >
            <Tab key="login" title="One way">
              <form className="flex flex-col gap-4">
                <Input isRequired label="Origen" placeholder="Ingrese su Origen" />
                <Input isRequired label="Destino" placeholder="Ingrese su Destino" />
                <DatePick />
                <IconButtons />
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Buscar vuelo
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Round trip">
              <form className="flex flex-col gap-4 h-[300px]">
                <Input isRequired label="Name" placeholder="Enter your name" type="text" />
                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                <Input isRequired label="Password" placeholder="Enter your password" type="password" />
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" onPress={() => setSelected("login")}>
                    Buscar vuelo
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="multiple" title="Multiple">
              <form className="flex flex-col gap-4 h-[300px]">
                <Input isRequired label="Name" placeholder="Enter your name" type="text" />
                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                <Input isRequired label="Password" placeholder="Enter your password" type="password" />
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" onPress={() => setSelected("login")}>
                    Buscar vuelo
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Buscar vuelo
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};

export default AuthForm;
