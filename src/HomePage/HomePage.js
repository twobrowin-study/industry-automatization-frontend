import React from 'react'
import NavBar from "../Navbar/NavBar";
import CatalogList from "./CatalogList";
import '../css/HomePage.css'

export default class HomePage extends React.Component {
    render() {
        const list1 = [
            {
                type:'catalog',
                name: 'testCatalog1',
                list: [
                    {
                        type: 'catalog',
                        name: 'testCatalog2',
                        list: [
                            {
                                type: 'file',
                                name: 'testFile1.txt'
                            },
                            {
                                type: 'file',
                                name: 'testFile2.txt'
                            },
                            {
                                type: 'file',
                                name: 'testFile3.txt'
                            }
                        ]
                    },
                    {
                        type: 'file',
                        name: 'testFile4.txt'
                    },
                    {
                        type: 'catalog',
                        name: 'testCatalog3',
                        list: [
                            {
                                type: 'file',
                                name: 'testFile5.txt'
                            },
                            {
                                type: 'file',
                                name: 'testFile6.txt'
                            },
                            {
                                type: 'file',
                                name: 'testFile7.txt'
                            }
                        ]
                    }
                ]
            },
            {
                type:'catalog',
                name: 'testCatalog1',
                list: [
                    {
                        type: 'catalog',
                        name: 'testCatalog2',
                        list: [
                            {
                                type: 'file',
                                name: 'testFile1.txt'
                            },
                            {
                                type: 'file',
                                name: 'testFile2.txt'
                            },
                            {
                                type: 'file',
                                name: 'testFile3.txt'
                            }
                        ]
                    },
                    {
                        type: 'file',
                        name: 'testFile4.txt'
                    },
                    {
                        type: 'catalog',
                        name: 'testCatalog3',
                        list: [
                            {
                                type: 'file',
                                name: 'testFile5.txt'
                            },
                            {
                                type: 'file',
                                name: 'testFile6.txt'
                            },
                            {
                                type: 'file',
                                name: 'testFile7.txt'
                            }
                        ]
                    }
                ]
            },
            {
                type:'catalog',
                name: 'testCatalog1',
                list: [
                    {
                        type: 'catalog',
                        name: 'testCatalog2',
                        list: [
                            {
                                type: 'file',
                                name: 'testFile1.txt'
                            },
                            {
                                type: 'file',
                                name: 'testFile2.txt'
                            },
                            {
                                type: 'file',
                                name: 'testFile3.txt'
                            }
                        ]
                    },
                    {
                        type: 'file',
                        name: 'testFile4.txt'
                    },
                    {
                        type: 'catalog',
                        name: 'testCatalog3',
                        list: [
                            {
                                type: 'file',
                                name: 'testFile5.txt'
                            },
                            {
                                type: 'file',
                                name: 'testFile6.txt'
                            },
                            {
                                type: 'file',
                                name: 'testFile7.txt'
                            }
                        ]
                    }
                ]
            },
            {
                type:'catalog',
                name: 'testCatalog1',
                list: [
                    {
                        type: 'catalog',
                        name: 'testCatalog2',
                        list: [
                            {
                                type: 'file',
                                name: 'testFile1.txt'
                            },
                            {
                                type: 'file',
                                name: 'testFile2.txt'
                            },
                            {
                                type: 'file',
                                name: 'testFile3.txt'
                            }
                        ]
                    },
                    {
                        type: 'file',
                        name: 'testFile4.txt'
                    },
                    {
                        type: 'catalog',
                        name: 'testCatalog3',
                        list: [
                            {
                                type: 'file',
                                name: 'testFile5.txt'
                            },
                            {
                                type: 'file',
                                name: 'testFile6.txt'
                            },
                            {
                                type: 'file',
                                name: 'testFile7.txt'
                            }
                        ]
                    }
                ]
            }
            ]
        const list2 = [
            {
                type:'catalog',
                name: 'testCatalog1',
                list: [
                    {
                        type: 'catalog',
                        name: 'testCatalog2',
                        list: [
                            {
                                type: 'catalog',
                                name: 'testCatalog3',
                                list: [
                                    {
                                        type: 'catalog',
                                        name: 'testCatalog4',
                                        list: [
                                            {
                                                type: 'catalog',
                                                name: 'testCatalog5',
                                                list: [
                                                    {
                                                        type: 'file',
                                                        name: 'testFile1.txt'
                                                    },
                                                    {
                                                        type: 'file',
                                                        name: 'testFile2.txt'
                                                    },
                                                    {
                                                        type: 'file',
                                                        name: 'testFile3.txt'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
        ]
        return(
            <div className='home-page-content'>
                <NavBar />
                <CatalogList list={list1}/>
            </div>
        )
    }
}