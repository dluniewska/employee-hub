import { useContext, useEffect, useState } from "react";
import useUnitsService from "~/hooks/useUnitsService";
import { EmployeeHubContext } from "~/providers/ContextProvider";
import { Unit } from "~types/types.unit";
import { UnitList } from "../common/Unit";

const UnitsPage = () => {

  const [rootUnits, setRootUnits] = useState<Unit[]>([])

  const { units, setUnits } = useContext(EmployeeHubContext)
  const { getUnits } = useUnitsService();

  useEffect(() => {
    getUnits(100, 0).then((res) => {
      let rootUnits = res?.filter(unit => unit.parentId === null);
      setRootUnits(rootUnits);
      setUnits(res);
    })
  }, [])

  return (
    <div className="w-screen h-screen overflow-visible mx-auto">
      <div className="pt-8 flex flex-col overflow-y-auto bg-scroll h-full hide-scrollbar pb-20 items-center">
        <UnitList allUnits={units} rootUnits={rootUnits} />
      </div>
    </div>
  )
}

export default UnitsPage