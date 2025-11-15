"use client"

import { useState } from "react"
import { Camera, Trophy, Users, Zap, Target, Cpu, Award, Wrench, ArrowLeft } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggerContainer } from "@/components/stagger-container"
import { motion } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import workshopSessionsData from "@/data/Workshop-Sessions.json"
import competitionWinnersData from "@/data/Competition-Winners.json"
import teamBuildingData from "@/data/Team-Building.json"
import innovationLabData from "@/data/Innovation-Lab.json"
import projectShowcaseData from "@/data/Project-Showcase.json"
import techTalksData from "@/data/Tech-Talks.json"
import awardCeremonyData from "@/data/Award-Ceremony.json"
import handsOnLearningData from "@/data/Hands-on-Learning.json"

const galleryItems = [
  { icon: Camera, title: "Workshop Sessions", color: "from-primary/20 to-accent/20" },
  { icon: Trophy, title: "Competition Winners", color: "from-accent/20 to-primary/20" },
  { icon: Users, title: "Team Building", color: "from-primary/15 to-accent/15" },
  { icon: Zap, title: "Innovation Lab", color: "from-accent/15 to-primary/15" },
  { icon: Target, title: "Project Showcase", color: "from-primary/25 to-accent/25" },
  { icon: Cpu, title: "Tech Talks", color: "from-accent/25 to-primary/25" },
  { icon: Award, title: "Award Ceremony", color: "from-primary/30 to-accent/30" },
  { icon: Wrench, title: "Hands-on Learning", color: "from-accent/30 to-primary/30" },
]

const galleryDataMap: Record<string, typeof workshopSessionsData> = {
  "Workshop Sessions": workshopSessionsData,
  "Competition Winners": competitionWinnersData,
  "Team Building": teamBuildingData,
  "Innovation Lab": innovationLabData,
  "Project Showcase": projectShowcaseData,
  "Tech Talks": techTalksData,
  "Award Ceremony": awardCeremonyData,
  "Hands-on Learning": handsOnLearningData,
}

type FolderData = {
  folderName: string
  thumbnail: string
  images: string[]
}

export function Gallery() {
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedFolder, setSelectedFolder] = useState<FolderData | null>(null)

  const handleCategoryClick = (title: string) => {
    setSelectedCategory(title)
    setIsCategoryModalOpen(true)
  }

  const handleFolderClick = (folder: FolderData) => {
    setSelectedFolder(folder)
    setIsCategoryModalOpen(false)
    setIsImageModalOpen(true)
  }

  const handleBackToCategories = () => {
    setIsImageModalOpen(false)
    setIsCategoryModalOpen(true)
  }

  const selectedFolders: FolderData[] = selectedCategory ? (galleryDataMap[selectedCategory] || []) : []
  return (
    <section id="gallery" className="py-24 bg-cream dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection className="text-center mb-20">
          <h2 className="section-heading text-foreground mb-6">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Capturing moments from our events, workshops, and celebrations
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateY: 5,
              }}
              transition={{ duration: 0.3 }}
              onClick={() => handleCategoryClick(item.title)}
              className={`group relative overflow-hidden rounded-lg card-shadow hover-transition bg-gradient-to-br ${item.color} h-64 flex items-center justify-center cursor-pointer`}
            >
              <div className="text-center">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                </motion.div>
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>

      {/* Category Modal - Shows folders/subcategories */}
      <Dialog open={isCategoryModalOpen} onOpenChange={setIsCategoryModalOpen}>
        <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              {selectedCategory}
            </DialogTitle>
          </DialogHeader>
          {selectedFolders.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 place-items-center">
              {selectedFolders.map((folder, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleFolderClick(folder)}
                  className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer card-shadow w-full max-w-xs"
                >
                  <img
                    src={folder.thumbnail}
                    alt={folder.folderName}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold text-lg">{folder.folderName}</h3>
                    <p className="text-sm text-white/80">{folder.images.length} images</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <p>No folders available for this category.</p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Image Modal - Shows images from selected folder */}
      <Dialog 
        open={isImageModalOpen} 
        onOpenChange={(open) => {
          if (!open) {
            handleBackToCategories()
          }
        }}
      >
        <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-2">
              <motion.button
                onClick={handleBackToCategories}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="font-medium">Back</span>
              </motion.button>
            </div>
            <DialogTitle className="text-2xl font-bold text-center">
              {selectedFolder?.folderName}
            </DialogTitle>
          </DialogHeader>
          {selectedFolder && selectedFolder.images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
              {selectedFolder.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative group overflow-hidden rounded-lg aspect-square"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <p>No images available in this folder.</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
