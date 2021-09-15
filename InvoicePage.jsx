import React from 'react'
import styles from './InvoicePage.module.css'

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
);

export default function InvoicePage() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.left_top}>
                    <img src="https://i.ibb.co/LC3s0GD/logo-1.png" alt="" />
                    <span>Tradegully</span>
                </div>
                <div className={styles.right_top}>
                    <div className={styles.header_right_top}>Invoice</div>
                    <div className={styles.part1}>
                        <div className={styles.sub_right_top}>Invoice Number:</div>
                        <div className={styles.text_right_top}>12345678</div>
                    </div>
                    <div className={styles.part2}>
                        <div className={styles.sub_right_top}>Date:</div>
                        <div className={styles.text_right_top}>15 April, 2021</div>
                    </div>
                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.left_top}>
                    <div className={styles.sub_right_top}>Bill To:</div>
                    <div className={styles.text_right_top}>Timmy Turner 957 North Street London, SE20 3JW United Kingdom</div>

                    <div className={styles.sub_right_top}>Tax Number:</div>
                    <div className={styles.text_right_top}>12345 6789 GB0001</div>
                </div>
                <div className={styles.right_top}>
                    <div className={styles.sub_right_top}>Bill From:</div>
                    <div className={styles.text_right_top}>Lemon Squeezy LLC 831 Manor Dr. Fountain Valley, CA 92708 United States</div>

                    <div className={styles.sub_right_top}>Tax Number:</div>
                    <div className={styles.text_right_top}>12345 6789 GB0001</div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.left_top}>
                    <div className={styles.sub_right_top}>ITEM</div>
                    <div className={styles.sub_right_top}>Mastering the Grid (Commerical License)</div>
                    <div className={styles.sub_right_top}>Splashify 2.0</div>
                </div>
                <div className={styles.right_top}>
                    <div className={styles.row1}>
                        <div className={styles.cost1_header}>COST</div>
                        <div className={styles.qty1_header}>QTY</div>
                        <div className={styles.price1_header}>PRICE</div>
                    </div>
                    <div className={styles.row1}>
                        <div className={styles.cost1}>$99.00</div>
                        <div className={styles.qty1}>1</div>
                        <div className={styles.price1}>$99.00</div>
                    </div>
                    <div className={styles.row1}>
                        <div className={styles.cost1}>$99.00</div>
                        <div className={styles.qty1}>1</div>
                        <div className={styles.price1}>$99.00</div>
                    </div>

                    <ColoredLine color="black" />
                    
                    <div className={styles.row1}>
                        <div className={styles.cost1}>SubTotal</div>
                        <div className={styles.qty1}></div>
                        <div className={styles.price1}>$99.00</div>
                    </div>
                    <div className={styles.row1}>
                        <div className={styles.cost1}>Discount(Black Friday)</div>
                        <div className={styles.qty1}></div>
                        <div className={styles.price1}>$99.00</div>
                    </div>
                    <div className={styles.row1}>
                        <div className={styles.cost1}>VAT</div>
                        <div className={styles.qty1}></div>
                        <div className={styles.price1}>$99.00</div>
                    </div>
                    <div className={styles.row1}>
                        <div className={styles.cost1}>Invoice Total</div>
                        <div className={styles.qty1}></div>
                        <div className={styles.price1}>$99.00</div>
                    </div>
                    <div className={styles.row1}>
                        <div className={styles.cost1}>Paid</div>
                        <div className={styles.qty1}></div>
                        <div className={styles.price1}>$99.00</div>
                    </div>

                    <ColoredLine color="black" />

                    <div className={styles.row1}>
                        <div className={styles.cost1}>Amount Due</div>
                        <div className={styles.qty1}></div>
                        <div className={styles.price1}>$99.00</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
