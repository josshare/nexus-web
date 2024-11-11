import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import DatePick from "./DatePick";
import IconButtons from "./IconButton";
import { Link } from "@nextui-org/link";

const FlightSearchForm: React.FC = () => {
  const [selected, setSelected] = useState<React.Key>("login");
  const [origins, setOrigins] = useState<string[]>([]);
  const [filteredOrigins, setFilteredOrigins] = useState<string[]>([]);
  const [origin, setOrigin] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [destinations, setDestinations] = useState<string[]>([]);
  const [filteredDestinations, setFilteredDestinations] = useState<string[]>([]);
  const [destination, setDestination] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch("http://ec2-3-226-155-191.compute-1.amazonaws.com:8080/api/flights/origins")
      .then((response) => response.json())
      .then((data) => setOrigins(data))
      .catch((error) => console.error("Error fetching origins:", error));
  }, []);
  useEffect(() => {
    fetch("http://localhost:8080/api/flights/destinations")
      .then((response) => response.json())
      .then((data) => setDestinations(data))
      .catch((error) => console.error("Error fetching destinations:", error));
  }, []);

  const handleOriginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setOrigin(value);
    setFilteredOrigins(
      origins.filter((origin) =>
        origin?.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleDestinationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDestination(value);
    setFilteredDestinations(
      destinations.filter((destination) =>
        destination?.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="flex flex-col w-full">
      <Card className="max-w-full w-[340px] h-[400px] relative">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Options"
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
              <form className="flex flex-col gap-4 relative">
                <Input
                  isRequired
                  label="Origin"
                  placeholder="Enter your origin"
                  value={origin}
                  onChange={handleOriginChange}
                />
                {filteredOrigins.length > 0 && (
                  <ul className="absolute top-24 left-0 right-0 bg-black border border-gray-300 mt-1 max-h-40 overflow-y-auto z-10">
                    {filteredOrigins.map((origin, index) => (
                      <li
                        key={index}
                        className="p-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => {
                          setOrigin(origin);
                          setFilteredOrigins([]);
                        }}
                      >
                        {origin}
                      </li>
                    ))}
                  </ul>
                )}
                <Input
                  isRequired
                  label="Destination"
                  placeholder="Enter your destination"
                  value={destination}
                  onChange={handleDestinationChange}
                />
                {filteredDestinations.length > 0 && (
                  <ul className="absolute top-40 left-0 right-0 bg-black border border-gray-300 mt-1 max-h-40 overflow-y-auto z-10">
                    {filteredDestinations.map((destination, index) => (
                      <li
                        key={index}
                        className="p-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => {
                          setDestination(destination);
                          setFilteredDestinations([]);
                        }}
                      >
                        {destination}
                      </li>
                    ))}
                  </ul>
                )}
                <DatePick label="Departure Date" onChange={(date) => setDepartureDate(date)} />
                <IconButtons />
                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary" onClick={(e) => {
                    e.preventDefault();
                    if (!origin || !destination || !departureDate) {
                      setErrorMessage("Please fill in all required fields.");
                    } else {
                      setErrorMessage("");
                      console.log("Searching for one-way flight...");
                      // Add your search logic here
                    }
                  }}>
                    Search flight
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="round-trip" title="Round trip">
              <form className="flex flex-col gap-4 h-[300px]">
                <Input
                  isRequired
                  label="Origin"
                  placeholder="Enter your origin"
                  value={origin}
                  onChange={handleOriginChange}
                />
                {filteredOrigins.length > 0 && (
                  <ul className="absolute top-24 left-0 right-0 bg-black border border-gray-300 mt-1 max-h-40 overflow-y-auto z-10">
                    {filteredOrigins.map((origin, index) => (
                      <li
                        key={index}
                        className="p-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => {
                          setOrigin(origin);
                          setFilteredOrigins([]);
                        }}
                      >
                        {origin}
                      </li>
                    ))}
                  </ul>
                )}
                <Input
                  isRequired
                  label="Destination"
                  placeholder="Enter your destination"
                  value={destination}
                  onChange={handleDestinationChange}
                />
                {filteredDestinations.length > 0 && (
                  <ul className="absolute top-40 left-0 right-0 bg-white border border-gray-300 mt-1 max-h-40 overflow-y-auto z-10">
                    {filteredDestinations.map((destination, index) => (
                      <li
                        key={index}
                        className="p-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => {
                          setDestination(destination);
                          setFilteredDestinations([]);
                        }}
                      >
                        {destination}
                      </li>
                    ))}
                  </ul>
                )}
                <DatePick label="Departure Date" onChange={(date) => setDepartureDate(date)} />
                <DatePick label="Return Date" onChange={(date) => setReturnDate(date)} />
                <IconButtons />
                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary" onClick={(e) => {
                    e.preventDefault();
                    if (!origin || !destination || !departureDate || !returnDate) {
                      setErrorMessage("Please fill in all required fields.");
                    } else if (new Date(returnDate) <= new Date(departureDate)) {
                      setErrorMessage("Return date must be after departure date.");
                    } else {
                      setErrorMessage("");
                      console.log("Searching for round-trip flight...");
                      // Add your search logic here
                    }
                  }}>
                    Search flight
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="multiple" title="Multiple">
              <form className="flex flex-col gap-4 h-[300px]">
                <p className="text-center">Multiple destination search coming soon!</p>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};

export default FlightSearchForm;
