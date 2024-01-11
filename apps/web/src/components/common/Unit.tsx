import { Unit } from "~types/types.unit";


export const UnitComponent = ({ unit, childrenUnits }: {unit: Unit, childrenUnits: Unit[] }) => {

    let children = childrenUnits.filter(unit => unit.parentId === unit.id);
    return (
        <div>
            <div>{unit.name}</div>

            {childrenUnits && childrenUnits.length > 0 && childrenUnits.map(child => (
                <UnitComponent key={child.id} unit={child} childrenUnits={children?.length > 0 ? children : []} />
            ))}
        </div>
    );
};