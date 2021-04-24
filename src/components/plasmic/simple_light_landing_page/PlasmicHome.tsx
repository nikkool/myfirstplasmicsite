// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dd53smoB9V3esAu5mdCJqk
// Component: JSnj8wjDUXCyz
import * as React from "react"

import { Link, GatsbyLinkProps as LinkProps } from "gatsby"

import * as p from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import Header from "../../Header" // plasmic-import: Fkclzo8ktuhxm/component
import TopSection from "../../TopSection" // plasmic-import: x21pqtZY6006z/component
import Section from "../../Section" // plasmic-import: klFU1caRKOswr/component
import FeatureCard from "../../FeatureCard" // plasmic-import: r3340iALDPrai/component
import Testimonial from "../../Testimonial" // plasmic-import: UnnysL_QxzvRKH/component
import HomeCta from "../../HomeCta" // plasmic-import: u811q6vKhqc5P/component
import Footer from "../../Footer" // plasmic-import: Ysu7-7eCIcFRC/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen" // plasmic-import: MHREP1FHHzFB5i/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css" // plasmic-import: dd53smoB9V3esAu5mdCJqk/projectcss
import * as sty from "./PlasmicHome.module.css" // plasmic-import: JSnj8wjDUXCyz/css

import LightningIcon from "./icons/PlasmicIcon__Lightning" // plasmic-import: FOtMj_WbhGrJDa/icon
import HammerIcon from "./icons/PlasmicIcon__Hammer" // plasmic-import: zs-mUW8YNWZqUT/icon
import PencilIcon from "./icons/PlasmicIcon__Pencil" // plasmic-import: DjvrzRNDIK2bD3/icon
import SwapIcon from "./icons/PlasmicIcon__Swap" // plasmic-import: q5hYz_C6c_J-k5/icon
import SlotIcon from "./icons/PlasmicIcon__Slot" // plasmic-import: BdPqRBSGcYIqUr/icon
import CycleIcon from "./icons/PlasmicIcon__Cycle" // plasmic-import: joeHXcUtOG3Qzd/icon
import FacebookLogoIcon from "./icons/PlasmicIcon__FacebookLogo" // plasmic-import: KGBX9DTpaRljxM/icon
import TinderLogoIcon from "./icons/PlasmicIcon__TinderLogo" // plasmic-import: _asvv_-q-zpPtU/icon
import AirbnbLogoIcon from "./icons/PlasmicIcon__AirbnbLogo" // plasmic-import: oZb9CPIBVsliSQ/icon
import HubspotLogoIcon from "./icons/PlasmicIcon__HubspotLogo" // plasmic-import: hO0u5tzls8CuL6/icon
import AmazonLogoIcon from "./icons/PlasmicIcon__AmazonLogo" // plasmic-import: RWEhiWJZbS9zBV/icon
import simpleProjectIJUiTWn3Mr8QQ from "./images/simpleProject.png" // plasmic-import: iJUi-TWn3MR8qQ/picture
import taskXmoBOmr7Fo2Agd from "./images/task.png" // plasmic-import: XmoBOmr7Fo2Agd/picture

export type PlasmicHome__VariantMembers = {}

export type PlasmicHome__VariantsArgs = {}
type VariantPropType = keyof PlasmicHome__VariantsArgs
export const PlasmicHome__VariantProps = new Array<VariantPropType>()

export type PlasmicHome__ArgsType = {}
type ArgPropType = keyof PlasmicHome__ArgsType
export const PlasmicHome__ArgProps = new Array<ArgPropType>()

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">
  header?: p.Flex<typeof Header>
  topSection?: p.Flex<typeof TopSection>
  testimonial?: p.Flex<typeof Testimonial>
  homeCta?: p.Flex<typeof HomeCta>
  footer?: p.Flex<typeof Footer>
}

export interface DefaultHomeProps {
  className?: string
}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs
  args: PlasmicHome__ArgsType
  overrides: PlasmicHome__OverridesType
  forNode?: string
}) {
  const { variants, args, overrides, forNode } = props

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants(),
  })

  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__aoAxK)}
          >
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <TopSection
              data-plasmic-name={"topSection"}
              data-plasmic-override={overrides.topSection}
              className={classNames("__wab_instance", sty.topSection)}
            />

            <Section
              className={classNames("__wab_instance", sty.section__kLLuq)}
              subtitle={
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
              }
              title={"Explore the solutions"}
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box___03Ro9)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__tJq4L)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__gkoQh
                  )}
                >
                  {"Powerful suite of tools"}
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__cp5Y5
                  )}
                >
                  {
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
                  }
                </div>

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__xESy
                  )}
                  description={
                    "Taking collaboration to the next level with security and administrative features built for teams"
                  }
                  iconBack={
                    <LightningIcon
                      className={classNames(defaultcss.all, sty.svg__r0SsE)}
                      role={"img"}
                    />
                  }
                  long={"long" as const}
                  title={"Building the Simple ecosystem"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__vjuTc
                  )}
                  description={
                    "Taking collaboration to the next level with security and administrative features built for teams"
                  }
                  iconBack={
                    <HammerIcon
                      className={classNames(defaultcss.all, sty.svg__vM8JN)}
                      role={"img"}
                    />
                  }
                  long={"long" as const}
                  title={"Building the Simple Ecosystem"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__cOEj
                  )}
                  description={
                    "Taking collaboration to the next level with security and administrative features built for teams"
                  }
                  iconBack={
                    <PencilIcon
                      className={classNames(defaultcss.all, sty.svg__kdA5H)}
                      role={"img"}
                    />
                  }
                  long={"long" as const}
                  title={"Building the Simple Ecosystem"}
                />
              </p.Stack>

              <div className={classNames(defaultcss.all, sty.box__fmKzg)}>
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__pKllH)}
                  role={"img"}
                  src={simpleProjectIJUiTWn3Mr8QQ}
                />

                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__k27Bc)}
                  role={"img"}
                  src={taskXmoBOmr7Fo2Agd}
                />
              </div>
            </p.Stack>

            <div className={classNames(defaultcss.all, sty.box__f3Hec)}>
              <div className={classNames(defaultcss.all, sty.box__tKdj5)} />

              <Section
                className={classNames("__wab_instance", sty.section__nHI)}
                subtitle={
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
                title={"How Simple works"}
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__npvy)}
              >
                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__gmpWn
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <SwapIcon
                      className={classNames(defaultcss.all, sty.svg__tmEkP)}
                      role={"img"}
                    />
                  }
                  title={"Initial Contact"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__wcShM
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <SlotIcon
                      className={classNames(defaultcss.all, sty.svg__vzlQp)}
                      role={"img"}
                    />
                  }
                  title={"Discovery Session"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__vLxD
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <CycleIcon
                      className={classNames(defaultcss.all, sty.svg__cHdWv)}
                      role={"img"}
                    />
                  }
                  title={"Contracting"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__ekzQh
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <HammerIcon
                      className={classNames(defaultcss.all, sty.svg___4UekO)}
                      role={"img"}
                    />
                  }
                  title={"Fast Prototyping"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__wu4P1
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <PencilIcon
                      className={classNames(defaultcss.all, sty.svg__om8Bx)}
                      role={"img"}
                    />
                  }
                  title={"Design Phase"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard___3JqM
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <LightningIcon
                      className={classNames(defaultcss.all, sty.svg__zkZn4)}
                      role={"img"}
                    />
                  }
                  title={"Develop & Launch"}
                />
              </p.Stack>

              <div className={classNames(defaultcss.all, sty.box__g7Z7F)} />
            </div>

            <Section
              className={classNames("__wab_instance", sty.section__groCy)}
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box___9BYc)}
            >
              <FacebookLogoIcon
                className={classNames(defaultcss.all, sty.svg__a9BnF)}
                role={"img"}
              />

              <TinderLogoIcon
                className={classNames(defaultcss.all, sty.svg__cv71C)}
                role={"img"}
              />

              <AirbnbLogoIcon
                className={classNames(defaultcss.all, sty.svg__rbXrT)}
                role={"img"}
              />

              <HubspotLogoIcon
                className={classNames(defaultcss.all, sty.svg__evOwt)}
                role={"img"}
              />

              <AmazonLogoIcon
                className={classNames(defaultcss.all, sty.svg__qtvI)}
                role={"img"}
              />
            </p.Stack>

            <Testimonial
              data-plasmic-name={"testimonial"}
              data-plasmic-override={overrides.testimonial}
              className={classNames("__wab_instance", sty.testimonial)}
            />

            <HomeCta
              data-plasmic-name={"homeCta"}
              data-plasmic-override={overrides.homeCta}
              className={classNames("__wab_instance", sty.homeCta)}
            />

            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null
}

const PlasmicDescendants = {
  root: ["root", "header", "topSection", "testimonial", "homeCta", "footer"],
  header: ["header"],
  topSection: ["topSection"],
  testimonial: ["testimonial"],
  homeCta: ["homeCta"],
  footer: ["footer"],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number]
type NodeDefaultElementType = {
  root: "div"
  header: typeof Header
  topSection: typeof TopSection
  testimonial: typeof Testimonial
  homeCta: typeof HomeCta
  footer: typeof Footer
}

type ReservedPropsType = "variants" | "args" | "overrides"
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicHome__VariantsArgs
  args?: PlasmicHome__ArgsType
  overrides?: NodeOverridesType<T>
} & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicHome__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key }
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps,
    })

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicHome"
  } else {
    func.displayName = `PlasmicHome.${nodeName}`
  }
  return func
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    topSection: makeNodeComponent("topSection"),
    testimonial: makeNodeComponent("testimonial"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps,
  }
)

export default PlasmicHome
/* prettier-ignore-end */
