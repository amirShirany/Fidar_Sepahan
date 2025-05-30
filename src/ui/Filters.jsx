import { useState } from "react"
import Modal from "../ui/Modal"
import ArrowRight from "../assets/icons/ArrowRight.svg"
import SettingMobile from "../assets/icons/SettingMobile.svg"
import FiltersForms from "../components/FiltersForms"

export default function Filters({ selectedOptions, setSelectedOptions }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="max-w-[16rem] !ml-6 md:!ml-[6.75rem]">
      {/* Breadcrumb */}
      <div className="flex items-center !my-6">
        <p className="text-gray-600">Home</p>
        <img src={ArrowRight} alt="ArrowRight" />
        <p className="text-primary underline">Products</p>
      </div>

      {/* Mobile Filters Button */}
      <div
        onClick={() => setOpen(true)}
        className="md:hidden cursor-pointer flex items-center w-36 h-10 rounded-lg gap-x-2 !pl-2 !mt-8 shadow_2">
        <img src={SettingMobile} alt="SettingMobile" />
        <p className="text-black">Filters</p>
      </div>

      {/* Desktop Filters */}
      <div className="hidden md:block">
        <FiltersForms
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      </div>

      {/* Modal Filters */}
      <Modal title="Filters" open={open} onClose={() => setOpen(false)}>
        <FiltersForms
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          onClose={() => setOpen(false)}
        />
      </Modal>
    </div>
  )
}
