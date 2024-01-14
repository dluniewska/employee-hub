import { useState } from 'react';
import { Skill } from '~types/types.skill'
import { Button } from '~ui/Button';
import ExpandIcon from '~assets/expand.svg?react'
import React from 'react';

const SkillsSearch = ({ skills, selectedSkills, setSelectedSkills }: { skills: Skill[], selectedSkills: Skill[], setSelectedSkills: React.Dispatch<React.SetStateAction<Skill[]>> }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleCheckboxChange = (skill: Skill) => {
        if (selectedSkills.some(s => s.id === skill.id)) {
            setSelectedSkills(selectedSkills.filter(s => s.id !== skill.id));
        } else {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };

    return (
        <div className="p-8">

            <h1 className='font-medium text-lg mb-3'>Filtruj po umiejętnościach</h1>

            <div className='flex flex-row align-middle items-center'>
                <Button onClick={toggleDropdown} variant={'outline'} className="pl-6 py-2 rounded-md w-full">
                    <span>Umiejętności</span> <span><ExpandIcon className='ml-2' /></span>
                </Button>
            </div>


            {dropdownOpen && (
                <div className="mt-2 rounded-md shadow-lg bg-white z-10 w-full overflow-y-auto bg-scroll h-96 hide-scrollbar">
                    {skills.map((skill) => (
                        <React.Fragment>
                            <div key={skill.id} className="flex items-center p-2 border-b border-gray-100">
                                <input
                                    type="checkbox"
                                    id={`skill-${skill.id}`}
                                    className="mr-2 h-4 w-4"
                                    onChange={() => handleCheckboxChange(skill)}
                                    checked={selectedSkills.some(s => s.id === skill.id)}
                                />
                                <label htmlFor={`skill-${skill.id}`} className="text-md text-gray-700">
                                    {skill.name}
                                </label>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            )}

            {!dropdownOpen && <SelectedSkillsList selectedSkills={selectedSkills} />}

        </div>
    );
}

const SelectedSkillsList = ({ selectedSkills }: { selectedSkills: Skill[] }) => {
    return (
        <div>
            <div className='font-semibold py-3'>Zaznaczone:</div>
            {
                selectedSkills && selectedSkills.length > 0 ? (
                    <div className='mb-3 flex flex-wrap'>
                        {
                            selectedSkills.map((obj) => (
                                <div className='p-1 mr-2' key={obj.id}>{obj.name}</div>
                            ))
                        }
                    </div>

                )
                    :
                    <p>Nie wybrano filtrów</p>
            }
        </div>
    )
}

export default SkillsSearch