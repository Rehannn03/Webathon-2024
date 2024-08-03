import React, { useEffect } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


function SelectOption({selectedType, setSelectedType, allTypes}) {
    useEffect(() => {
        console.log(selectedType)
        console.log(allTypes)
    }, [selectedType, allTypes]
    )

  return (
    <>
    <p className="text-sm font-semibold">Select Speciality</p>
    <Select
        className="w-full"
        position="static"
        defaultValue={selectedType}
        onValueChange={(value) => setSelectedType(value)}
    >
        <SelectTrigger>
            <SelectValue>
                {
                    console.log(selectedType)
                }
                {
                    console.log(allTypes)
                }
                {selectedType ? allTypes.filter((type) => type.id === selectedType)[0]?.name : "Select Speciality"}
            </SelectValue>
        </SelectTrigger>
        <SelectContent>
            {allTypes.map((type) => (
                <SelectItem key={type.id} onSelect={() => setSelectedType(type.id)} isActive={selectedType === type.id} value={type.id}>
                    {type.name}
                </SelectItem>
            ))}

        </SelectContent>
    </Select>
    </>

  )
}

export default SelectOption