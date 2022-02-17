import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'

import TIMINGS from './constants'

import * as s from './Loader.module.scss'

gsap.registerPlugin(TextPlugin)

const Loader = ({ handleLoading }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setVisible(false)
        setTimeout(handleLoading, 500)
      },
    })
    tl.to(`.${s.logo}`, {
      height: '100%',
      ease: 'steps(15)',
      duration: 1.5,
      delay: 0.5,
    })
    tl.set(`.${s.logo}`, {
      height: 'max-content',
    })

    TIMINGS.forEach((item) => {
      tl.set(`.${s.content}`, {
        ...item,
        height:
          window.outerWidth < 640 && typeof item.height === 'number'
            ? item.height * 0.916 + 20
            : item.height,
      })
      if (item?.memoryTimings) {
        item?.memoryTimings.forEach(({ num, delay }) => {
          tl.set('span[data-numbers]', {
            text: `${num}K`,
            type: 'diff',
            delay,
          })
        })
      }
    })
  }, [])

  return (
    visible && (
      <Container className={s.loader}>
        <div className={s.logo}>
          <br />
          ███████╗██╗░░░██╗███████╗██████╗░░██████╗████████╗░█████╗░██╗░░██╗███████╗
          <br />
          ██╔════╝██║░░░██║██╔════╝██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██║░██╔╝██╔════╝
          <br />
          █████╗░░╚██╗░██╔╝█████╗░░██████╔╝╚█████╗░░░░██║░░░███████║█████═╝░█████╗░░
          <br />
          ██╔══╝░░░╚████╔╝░██╔══╝░░██╔══██╗░╚═══██╗░░░██║░░░██╔══██║██╔═██╗░██╔══╝░░
          <br />
          ███████╗░░╚██╔╝░░███████╗██║░░██║██████╔╝░░░██║░░░██║░░██║██║░╚██╗███████╗
          <br />
          ╚══════╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝
          <br />
          <br />
          ░█████╗░░█████╗░██████╗░██╗████████╗░█████╗░██╗░░░░░
          <br />
          ██╔══██╗██╔══██╗██╔══██╗██║╚══██╔══╝██╔══██╗██║░░░░░
          <br />
          ██║░░╚═╝███████║██████╔╝██║░░░██║░░░███████║██║░░░░░
          <br />
          ██║░░██╗██╔══██║██╔═══╝░██║░░░██║░░░██╔══██║██║░░░░░
          <br />
          ╚█████╔╝██║░░██║██║░░░░░██║░░░██║░░░██║░░██║███████╗
          <br />
          ░╚════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝╚══════╝
          <br />
        </div>
        <div className={s.content}>
          <span>EVERSTAKE BIOS (C) 2022 Everstake Capital LLC.</span>

          <span>–––––––––––––––––––––––––––––––––––––––––––––</span>
          <span>
            Memory Test : <span data-numbers>0</span> OK
          </span>

          <span />
          <span>Plug & Play Bios Extention v.1.0A</span>
          <span>Copyright (C) 2022 EVERSTAKE CAPITAL LLC.</span>
          <span />
          <span>1.806968: Use hw queue 8 for CAB traffic</span>
          <span>1.812125: Use hw queue 9 for beacons</span>
          <span>
            1.817116: wlan_vap_create : enter. devhandle=0x3b8f66bo,
            opmode=IEEE80211 M STA, flags=0x1
          </span>
          <span>
            1.823185: wlan_vap_create : exit. devhandle=0x3b8f66bo,
            opmode=IEEE80211 M STA, flags=0x1.
          </span>
          <span>1.829280: ATH tunables:</span>
          <span>
            1.834079: pul mode[1] txringsize[ 256) txsendasize[1024) reapmin(
            32) reapcount( 1281
          </span>
          <span>
            USBMSC Identifier (non-unique): 1480823661FF Ox59f Ox102a Ox100, 2
            USB: 2.761 The IOUSBFamily did not receive enough extra current for
            the SuperSpeed device (HubDevice) at Ox 15500000, asked for 400mA
            but got OMA
          </span>
          <span>
            USBF: 2.908 The IOUSBFamily did not receive enough extra current for
            the SuperSpeed device (HubDevice) at Ox15600000, asked for 400mA but
            got OMA 1080211Controller::dataLinkLayerAttachComplete(: adding
            EvarstakeEFINVRAM notification 3.138022: ATHR: unknown locale : 21
          </span>
          <span>
            USBMSC Identifier (non-unique): 504C323332314C414733594A354A Ox1058
            0x1140 Ox1016, 3
          </span>
          <span>NVDAStartup: Official</span>
          <span>HDAEnabler: Copyright (c) 2008 by Kabyl</span>
          <span>
            HDAEnabler: 05/05/2008 Added SP-Audio support by Blockchain
          </span>
          <span>
            HDAEnabler: 03/07/2009 Compi led for 32/64-bit by Blockchain,
          </span>
          <span>init</span>
          <span>probe</span>
          <span>start</span>
          <span>[IOBluetoothHCIController ][start] -- completed</span>
          <span>
            Everstake 16X5OACP11: Identified Serial Port on ACPI Device=UAR1
          </span>
          <span>
            Everstake 16X5QUARTSync1: Detected 16550AF/C/CF FIFO=16
            MaxBaud=115200
          </span>
          <span>HDAEnabler: Copyright (c) 2008 by Kabyl</span>
          <span>
            HDAEnabler: 05/05/2008 Added SP-fludio support by Blockchain
          </span>
          <span>
            HDAEnabler: 03/07/2009 Compiled for 32/64-bit by Blockchain
          </span>
          <span>HDAEnabler: Copyright (c) 2008 by Kabyl</span>
          <span>
            HDAEnabler: 05/05/2008 Added SP-Audio support by Blockchain
          </span>
          <span>
            HDAEnabler: 03/07/2009 Compiled for 32/64-bit by Blockchain
          </span>
          <span>Previous Shutdown Cause : 5</span>
          <span>SMC :: Smc Ini tHelper</span>
          <span>ERROR: MMIO regMap == NULL - fall back to old SMC mode</span>
          <span>DSMOS has arrived</span>
          <span>
            **** [IOBLuetoothHostController USB Transport][start] -- completed
            -- result = TRUE -- Oxa000 ****
          </span>
          <span>
            **** [CSRBluetoothHost ControllerUSB Transport][start] -- completed
            -- Oxa000 ****
          </span>
          <span>
            [IOBluetoothHCIController][staticBluetoothHCI Controller Transport
            ShowsUp) -- Received Bluetooth Controller register service
            notification -- Oxa000
          </span>
          <span>
            AirPort: Link Down on en1. Reason 8 (Disassociated because station
            leaving). flow divert kctl disconnect (O): disconnecting group 1
            CIOBluetoothHCI Controller::setConfigStatel calling registerService
          </span>
          <span>
            [IOBluetoothHCIController ] [protectedBluetoothHCIController
            TransportShowsUp] -- Connected to the transport successfully --
            Oxd400 -- Ox8000 -- Oxa000 ****
          </span>
          <span />
          <span />
          <span>
            **** [IOBluetoothHostControllerUSB Transport][setPowerStateWL] --
            PerformPowerStateChange() failed: OxE00002BC (k IOReturnError) --
            powerStateOrdinal = OFF, mCurr ent Internal PowerState = ON -&gt;
            mPending InternalPowerState = OFF -- Oxa000 ****
          </span>
          <span>VM Swap Subsystem is ON</span>
          <span>AtherosNewma 40P2P Interface::init name {`<p2po>`} role 1</span>
          <span>AtherosNewma40P2P Interface::init() {`<p2p>`} role 1</span>
          <span>
            8.828508: performCountryCodeOperation : Not connected, scan in
            progress[0)
          </span>
          <span>
            8.836528: Everstake8021 1 Request(10514) Unsupported ioctl 175
          </span>
          <span>
            8.843293: Everstake80211 Request [10514] Unsupported ioctl 194
          </span>
          <span>
            8.849591: setWOW PARAMETERS:wowevents = 2(1) 8.857574: ATHR: unknown
            locale: 21 8.863778: ATHR: unknown locale : 21
          </span>
          <span>8.873751: ATHR: unknown locale: 21</span>
          <span>8.888448: ATHR: unknown locale: 21</span>
          <span>8.894906: ATHR: unknown locale : 21</span>
          <span>
            ACPI SMC PlatformPlugin::start - waitForService (resourceMatching
            (Everstake IntelCPUPower Management) tined out!
          </span>
          <span>
            WARNING: TOPlatformPluginutilgetCPUID Info: this is an unknown CPU
            model Ox3c
          </span>
          <span> -- power management may be incomplete or unsupported</span>
          <span>NVDAGK1ODHAL loaded and registered</span>
          <span>9.822441: ATHR: unknown locale : 21</span>
          <span>Sound assertion in EverstakeHDACodecGeneric at line 352</span>
          <span>Sound assertion in EverstakeHDACodecGeneric at line 352</span>
          <span>Sound assertion in EverstakeHDACodecGeneric at line 352</span>
          <span>Sound assertion in EverstakeHDACodecGeneric at line 352</span>
          <span>Sound assertion in EverstakeHDAEngine at line 581</span>
          <span />
          <span className={s.dots}>CONTINUE LOADING</span>
        </div>
      </Container>
    )
  )
}

export default Loader
