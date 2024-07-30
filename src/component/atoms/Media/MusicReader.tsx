import styled from "styled-components";

const StyledMusicReader = styled.div`
        display: flex;
        flex-direction: row;
        height: 3rem;
        width: 30rem;
        left: 35%;
        top: -2.5rem;
        justify-content: space-around;
        position: relative;
        color: white;

        input[type="range"] {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            width: 20rem;
            background-color: transparent;

            &:focus {
                outline-color: #f8b195;
            }
        }

        input[type="range"]::-webkit-slider-runnable-track {
            -webkit-appearance: none;
            appearance: none;
            height: 3px;
            background: rgb(246, 114, 128);
            background: -webkit-linear-gradient(left,
                    rgba(246, 114, 128, 1) 0%,
                    rgba(192, 108, 132, 1) 50%,
                    rgba(53, 92, 125, 1) 100%);
            background: linear-gradient(to right,
                    rgba(246, 114, 128, 1) 0%,
                    rgba(192, 108, 132, 1) 50%,
                    rgba(53, 92, 125, 1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f67280",
                    endColorstr="#355c7d",
                    GradientType=1);
        }

        input[type="range"]::-moz-range-track {
            -moz-appearance: none;
            appearance: none;
            height: 3px;
            background: rgb(246, 114, 128);
            background: -moz-linear-gradient(left,
                    rgba(246, 114, 128, 1) 0%,
                    rgba(192, 108, 132, 1) 50%,
                    rgba(53, 92, 125, 1) 100%);
            background: linear-gradient(to right,
                    rgba(246, 114, 128, 1) 0%,
                    rgba(192, 108, 132, 1) 50%,
                    rgba(53, 92, 125, 1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f67280",
                    endColorstr="#355c7d",
                    GradientType=1);
        }

        input[type="range"]::-ms-track {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            height: 3px;
            background: rgb(246, 114, 128);
            background: -moz-linear-gradient(left,
                    rgba(246, 114, 128, 1) 0%,
                    rgba(192, 108, 132, 1) 50%,
                    rgba(53, 92, 125, 1) 100%);
            background: -webkit-linear-gradient(left,
                    rgba(246, 114, 128, 1) 0%,
                    rgba(192, 108, 132, 1) 50%,
                    rgba(53, 92, 125, 1) 100%);
            background: linear-gradient(to right,
                    rgba(246, 114, 128, 1) 0%,
                    rgba(192, 108, 132, 1) 50%,
                    rgba(53, 92, 125, 1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f67280",
                    endColorstr="#355c7d",
                    GradientType=1);
        }

        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            border: 2px solid #f8b195;
            border-radius: 50%;
            height: 20px;
            width: 20px;
            position: relative;
            bottom: 8px;
            background: #222 url("http://codemenatalie.com/wp-content/uploads/2019/09/slider-thumb.png") center no-repeat;
            background-size: 50%;
            box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
            cursor: grab;

            &:active {
                cursor: grabbing;
            }
        }


        input[type="range"]::-moz-range-thumb {
            -moz-appearance: none;
            appearance: none;
            border: 2px solid #f8b195;
            border-radius: 50%;
            height: 20px;
            width: 20px;
            position: relative;
            bottom: 8px;
            background: #222 url("http://codemenatalie.com/wp-content/uploads/2019/09/slider-thumb.png") center no-repeat;
            background-size: 50%;
            box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
            cursor: grab;

            &:active {
                cursor: grabbing;
            }
        }

        input[type="range"]::-ms-thumb {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            border: 2px solid #f8b195;
            border-radius: 50%;
            height: 20px;
            width: 20px;
            position: relative;
            bottom: 8px;
            background: #222 url("http://codemenatalie.com/wp-content/uploads/2019/09/slider-thumb.png") center no-repeat;
            background-size: 50%;
            box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
            cursor: grab;

            &:active {
                cursor: grabbing;
            }
        }
        `;

export default StyledMusicReader