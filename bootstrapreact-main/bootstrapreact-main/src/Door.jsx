import { Icon } from "@iconify/react"
import { useState } from 'react'; 

export default function Door() {

    return (
        <div className="flex items-center gap-1 m-1
        px-2
        bg-gray-300 rounded w-16">
            <Icon icon="material-symbols:door-sliding-outline"
                className="text-2xl text-yellow-700" />
            <span>Componente Door</span>
        </div>

    );

}


