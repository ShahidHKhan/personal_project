"use client";

import { motion } from "framer-motion";
import { FileText, GraduationCap } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { EDUCATION } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function Education() {
  return (
    <section id="education" className="py-16 sm:py-24">
      <Container>
        <SectionHeading icon={GraduationCap} title="Education" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {EDUCATION.map((ed) => (
            <motion.div key={`${ed.school}-${ed.degree}`} variants={staggerItem}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-base">{ed.school}</CardTitle>
                  <CardDescription>{ed.degree}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-sm text-muted-foreground">
                    {ed.time}
                    {ed.gpa ? ` · GPA ${ed.gpa}` : null}
                  </p>

                  {ed.highlights?.length ? (
                    <ul className="mt-4 space-y-2">
                      {ed.highlights.map((h) => (
                        <li key={h.label} className="flex gap-2 text-sm text-muted-foreground">
                          <span aria-hidden className="select-none text-muted-foreground/60">
                            ·
                          </span>
                          {h.href ? (
                            <a
                              href={h.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 underline decoration-dotted underline-offset-4 transition-colors hover:text-foreground"
                            >
                              {h.label}
                              <FileText className="h-3.5 w-3.5 shrink-0" />
                            </a>
                          ) : (
                            <span>{h.label}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
