import { createTheme } from "@mui/material";
import { Box } from '@mui/material/';
import { styled } from "@mui/system"

const primaryColor = '#AAAAAA';
const bodyColor = '#767676';
const bgColor = '#ECEEF2';
const errorMain = '#c62828';
export const secondaryColor = '#074EE8';

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        },
        background: {
            default: bgColor,
        },
    },
    typography: {
        fontFamily: [
            'Nunito',
            'sans-serif'
        ].join(','),
        body1: {
            color: bodyColor,
            fontSize: 14,
        },
        body2: {
            color: errorMain,
            fontSize: 12
        },
        h1: {
            fontSize: 24,
            fontWeight: 600,
            lineHeight: 3,
            textAlign: 'left'
        },
        h2: {
            fontSize: 18,
            lineHeight: 2,
            color: bodyColor,
            textAlign: 'left',
        },
        h3: {
            fontSize: 18,
            lineHeight: 2,
            color: secondaryColor,
            textAlign: 'left',
            fontWeight: 'bold',
        },
        subtitle1: {
            fontSize: 14,
            color: secondaryColor,
            fontWeight: 'bold'
        },
        button: {
            textTransform: 'none',
            color: secondaryColor,
            fontSize: 18,
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    width: '50%',
                    minWidth: '300px',
                    maxWidth: '617px',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    elevation: 3,
                    marginTop: '5%',
                    borderRadius: 20,
                    px: 6,
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    height: 8,
                    fontSize: 18,
                    color: bodyColor,
                    margin: 4,                
                },
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: 18,
                    color: bodyColor,
                    "&.Mui-focused": {
                        color: bodyColor,
                      },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    padding: 2,
                }
            }
        }
        // MuiOutlinedInput: {
        //     styleOverrides: {
        //         root: {
        //             "&.Mui-focused": {
        //                 "& .MuiOutlinedInput-notchedOutline": {
        //                   border: `2px solid #AAA`,
        //                 },
        //             }
        //         },
        //         notchedOutline: {
        //             border: `2px solid #AAA`,
        //         }
        //     }
        // },
    },
    
});

export const PageContainer = styled(Box, {
    name: 'PageContainer',
    slot: 'Wrapper'
})({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: bgColor,
});

export const TabContainer = styled(Box, {
    name: 'TabContainer',
    slot: 'Wrapper'
})({
    width: '85%',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottom: `2px solid #AAA`,
});

export default theme