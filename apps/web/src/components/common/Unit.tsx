import React from "react";
import { useNavigate } from "react-router-dom";
import { NavigationProps } from "~/types/props/types.navigationProps";
import { Unit } from "~types/types.unit";

function orangeColor(opacity: number): string {
    let colorVariant = "bg-pastel-pink-color/10";

    switch (opacity) {
        case 10:
            colorVariant = 'bg-pastel-pink-color/10';
            break;
        case 20:
            colorVariant = 'bg-pastel-pink-color/20';
            break;
        case 30:
            colorVariant = 'bg-pastel-pink-color/30';
            break;
        case 40:
            colorVariant = 'bg-pastel-pink-color/40';
            break;
        case 50:
            colorVariant = 'bg-pastel-pink-color/50';
            break;
        case 60:
            colorVariant = 'bg-pastel-pink-color/60';
            break;
        case 70:
            colorVariant = 'bg-pastel-pink-color/70';
            break;
        case 80:
            colorVariant = 'bg-pastel-pink-color/80';
            break;
        case 90:
        case 100: // Handle both 90 and 100 here
            colorVariant = 'bg-pastel-pink-color/90';
            break;
        default:
            colorVariant = 'bg-pastel-pink-color/10';
            break;
    }
    return colorVariant;
}

export const UnitComponent = ({ unit, childrenUnits, level, color }: { unit: Unit, childrenUnits: Unit[], level: number, color: string | null }) => {
    let navigate = useNavigate();

    const rootChildren = childrenUnits.filter(u => u.parentId === unit.id);
    const filteredChildren = childrenUnits.filter((element) => !rootChildren.includes(element));

    let opacity: number = level > 10 ? 10 : (level+3)*10;    
    let colorVariant = color ?? orangeColor(opacity);

    const handleArrowClick = (e: React.MouseEvent<HTMLDivElement>) => {
        navigate(`/units/${unit.id}`, { state: { id: unit.id } as NavigationProps });
        e.stopPropagation();
    }

    return (
        <div className={`border rounded-md flex flex-col m-4 p-5 ${colorVariant} hover:bg-pastel-dark-brown-color/40 hover:text-white`} onClick={(e) => handleArrowClick(e)}>
            <div className="flex flex-row pl-5" >
                <div className="font-semibold w-1/2">{unit.name}</div>
            </div>
            {
                rootChildren && rootChildren.length > 0 &&
                (
                    rootChildren?.map(rootUnit => (
                        <UnitComponent unit={rootUnit} childrenUnits={filteredChildren} level={level + 3} color={colorVariant} />
                    ))
                )
            }
        </div>
    );
};


export const UnitList  = ({ rootUnits, allUnits }: { rootUnits: Unit[], allUnits: Unit[] }) => {

    return (
        <div className="w-3/4">
          {
            rootUnits && rootUnits.length > 0 ?
              (
                rootUnits?.map(rootUnit => (
                  <UnitComponent key={rootUnit.id} unit={rootUnit} childrenUnits={allUnits} level={1} color={null}/>
                ))
              )
              :
              <p>no units</p>
          }
        </div>
    );
};