import { useContext, useEffect, useState } from "react";
import useUnitsService from "~/hooks/useUnitsService";
import { EmployeeHubContext } from "~/providers/ContextProvider";
import { Unit } from "~types/types.unit";
import { UnitComponent } from "../common/Unit";

const UnitsPage = () => {

  const { units, setUnits } = useContext(EmployeeHubContext)
  const [rootUnits, setRootUnits] = useState<Unit[]>([])
  const { getUnits } = useUnitsService();

  useEffect(() => {
    getUnits(100, 0).then((res) => {
      let rootUnits = res?.filter(unit => unit.parentId === null);
      console.log(res);
      setRootUnits(rootUnits);
      setUnits(res);
    })
  }, [])

  console.log("root", rootUnits)
  console.log(units)

  return (
    <div className="w-screen h-screen">
      <div className="m-auto flex flex-col h-screen w-screen">
        {
          rootUnits && rootUnits.length > 0 ?
            (
              rootUnits?.map(rootUnit => (
                <UnitComponent key={rootUnit.id} unit={rootUnit} childrenUnits={units} />
              ))
            )
            :
            <p>no units</p>
        }
      </div>
    </div>
  )
}

export default UnitsPage