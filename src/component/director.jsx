/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import teams from "../data/teams";

export function Directions(){
    return(
    <ul css={css`
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
        gap: 20px;
    `}>
        {teams.map((item)=>
        {return(
            <li key={item.id}>
                <div css={css`
                     width: 380px;
                     height: 40px;
                     background-color: pink;
                     font-size:20px;
                     color:black;
                     display:flex;
                     flex-dirextion: row;
                     align-items: center;
                    padding-left: 20px;
                    border-radius: 12px;
                    box-shadow: 0 4px 12px rgba(249, 249, 249, 1); 
                    `}>
                {item.name} Team {item.id}
                </div>
                {item.children.map(
                    (chid)=>{
                        return(
                            <p key={chid}  css={css`
                     width: 380px;
                     height: 40px;
                     background-color: pink;
                     font-size:20px;
                     color:black;
                     display:flex;
                     flex-dirextion: row;
                     align-items: center;
                    padding-left: 20px;
                    margin-left:80px;
                    border-radius: 12px;
                    box-shadow: 0 4px 12px rgba(249, 249, 249, 1); 
                    `}>{chid.name} Team {chid.id}</p>
                        )
                    }
                )}
            </li>
        )
        }
        )}
    </ul>
    )
}