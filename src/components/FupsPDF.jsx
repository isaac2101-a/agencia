import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../assets/logo_hidalgo.png';

// Estilos optimizados para dos páginas
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 20,
    fontSize: 8,
    fontFamily: 'Helvetica',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b1966c',
    paddingVertical: 12,
    paddingHorizontal: 15,
    width: '100%',
    marginBottom: 8,
    borderRadius: 5,
  },
  headerTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  logo: {
    width: 35,
    height: 35,
  },
  logoText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  logoSubText: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  logoYear: {
    color: 'white',
    fontSize: 7,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#982850',
    flex: 1,
  },
  titleRightSection: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 3,
  },
  headerBox: {
    border: '1px solid #8B4B6B',
    borderRadius: 10,
    padding: 4,
    minWidth: 100,
    textAlign: 'center',
  },
  headerBoxText: {
    fontSize: 7,
    color: '#8B4B6B',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 4,
    border: '2px solid #8B4B6B',
    borderRadius: 8,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#8B4B6B',
    padding: 3,
    marginBottom: 0,
  },
  sectionTitleBeige: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#8B4B6B',
    backgroundColor: '#b1966c',
    padding: 3,
    marginBottom: 0,
  },
  sectionContent: {
    padding: 6,
    backgroundColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'flex-end',
  },
  field: {
    flex: 1,
    marginRight: 4,
  },
  fieldMedium: {
    flex: 1.3,
    marginRight: 4,
  },
  fieldLarge: {
    flex: 1.8,
    marginRight: 4,
  },
  fieldSmall: {
    flex: 0.6,
    marginRight: 4,
  },
  fieldXSmall: {
    flex: 0.4,
    marginRight: 4,
  },
  label: {
    fontSize: 6,
    marginBottom: 1,
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    border: '1px solid #8B4B6B',
    padding: 2,
    borderRadius: 3,
    minHeight: 10,
    backgroundColor: '#FFFFFF',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  checkboxSquare: {
    width: 8,
    height: 8,
    border: '1px solid #333',
    marginRight: 3,
    borderRadius: 1,
  },
  checkboxLabel: {
    fontSize: 7,
    color: '#333',
    fontWeight: 'bold',
  },
  curpContainer: {
    marginTop: 2,
    marginBottom: 4,
  },
  curpLabel: {
    fontSize: 6,
    marginBottom: 1,
    color: '#333',
    fontWeight: 'bold',
  },
  curpBoxes: {
    flexDirection: 'row',
    gap: 1,
  },
  curpBox: {
    width: 10,
    height: 10,
    border: '1px solid #333',
    textAlign: 'center',
    fontSize: 6,
    backgroundColor: '#FFFFFF',
  },
  genderContainer: {
    flexDirection: 'column',
  },
  genderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
  },
  genderCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 6,
  },
  otherGenderText: {
    fontSize: 5,
    marginTop: 1,
    color: '#666',
  },
  subsectionTitle: {
    fontSize: 7,
    fontWeight: 'bold',
    color: '#8B4B6B',
    marginTop: 4,
    marginBottom: 3,
  },
  anexosSection: {
    backgroundColor: '#b1966c',
    border: '2px solid #B8956B',
    padding: 6,
    marginBottom: 4,
  },
  anexosTitle: {
    fontSize: 7,
    fontWeight: 'bold',
    color: '#8B4B6B',
    marginBottom: 4,
  },
  anexosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  anexosItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    marginBottom: 2,
  },
  anexosCheckbox: {
    width: 8,
    height: 8,
    border: '1px solid #333',
    marginRight: 3,
    borderRadius: 1,
  },
  anexosLabel: {
    fontSize: 6,
    color: '#333',
  },
  footer: {
    fontSize: 4,
    color: '#666',
    textAlign: 'justify',
    lineHeight: 1.1,
    marginTop: 4,
    paddingTop: 4,
    borderTop: '1px solid #ccc',
  },
  footerParagraph: {
    marginBottom: 2,
  },
  dateHelper: {
    fontSize: 4,
    color: '#666',
    marginBottom: 1,
    fontStyle: 'italic',
  },
  contactSection: {
    marginBottom: 3,
    border: '2px solid #8B4B6B',
    borderRadius: 8,
    overflow: 'hidden',
  },
  contactContent: {
    padding: 4,
    backgroundColor: '#FFFFFF',
  },
  compactRow: {
    flexDirection: 'row',
    marginBottom: 3,
    alignItems: 'flex-end',
  },
  generalSection: {
    marginBottom: 3,
  },
  generalContent: {
    padding: 4,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    gap: 8,
  },
  generalLeft: {
    flex: 1,
  },
  generalRight: {
    flex: 1.5,
  },
});

const FormatoPDF = ({ datos = {} }) => (
  <Document>
    {/* PÁGINA 1 */}
    <Page size="A4" style={styles.page}>
      {/* Header compacto */}
      <View style={styles.header}>
        <Image src={logo} style={styles.logo} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.logoText}>HIDALGO</Text>
          <Text style={styles.logoSubText}>PRIMERO EL PUEBLO</Text>
          <Text style={styles.logoYear}>2022-2028</Text>
        </View>
      </View>

      {/* Título principal optimizado */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Formato Único de la Persona Solicitante</Text>
        <View style={styles.titleRightSection}>
          <View style={styles.headerBox}>
            <Text style={styles.headerBoxText}>Fecha: (Día/Mes/Año)</Text>
          </View>
          <View style={styles.headerBox}>
            <Text style={styles.headerBoxText}>Folio de Registro:</Text>
          </View>
        </View>
      </View>

      {/* Sección 1: Datos Generales - Layout optimizado */}
      <View style={[styles.section, styles.generalSection]}>
        <Text style={styles.sectionTitleBeige}>1.- Datos Generales</Text>
        <View style={styles.generalContent}>
          <View style={styles.generalLeft}>
            <View style={styles.compactRow}>
              <View style={styles.checkbox}>
                <View style={styles.checkboxSquare}></View>
                <Text style={styles.checkboxLabel}>Incorporación</Text>
              </View>
              <View style={styles.checkbox}>
                <View style={styles.checkboxSquare}></View>
                <Text style={styles.checkboxLabel}>Actualización de Datos</Text>
              </View>
            </View>
            <View style={styles.compactRow}>
              <View style={styles.field}>
                <Text style={styles.label}>Secretaría / Organismo</Text>
                <View style={styles.input}></View>
              </View>
              <View style={styles.fieldSmall}>
                <Text style={styles.label}>ID Programa</Text>
                <View style={styles.input}></View>
              </View>
            </View>
          </View>
          <View style={styles.generalRight}>
            <Text style={styles.label}>Programa solicitado</Text>
            <View style={[styles.input, { minHeight: 20 }]}></View>
          </View>
        </View>
      </View>

      {/* Sección 2: Datos del Solicitante - Compacta */}
      <View style={styles.section}>
        <Text style={styles.sectionTitleBeige}>2.- Datos de la/el Solicitante</Text>
        <View style={styles.sectionContent}>
          <View style={styles.compactRow}>
            <View style={styles.field}>
              <Text style={styles.label}>Apellido Paterno</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.field}>
              <Text style={styles.label}>Apellido Materno</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.fieldLarge}>
              <Text style={styles.label}>Nombre (s)</Text>
              <View style={styles.input}></View>
            </View>
          </View>

          <View style={styles.compactRow}>
            <View style={styles.fieldMedium}>
              <Text style={styles.label}>Fecha de Nacimiento</Text>
              <Text style={styles.dateHelper}>Día / Mes / Año</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.fieldLarge}>
              <Text style={styles.label}>Lugar de Nacimiento</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.fieldXSmall}>
              <Text style={styles.label}>Edad</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.fieldMedium}>
              <View style={styles.genderContainer}>
                <Text style={styles.label}>Género</Text>
                <View style={styles.genderRow}>
                  <View style={styles.genderCheckbox}>
                    <View style={styles.checkboxSquare}></View>
                    <Text style={{ fontSize: 5 }}>H</Text>
                  </View>
                  <View style={styles.genderCheckbox}>
                    <View style={styles.checkboxSquare}></View>
                    <Text style={{ fontSize: 5 }}>M</Text>
                  </View>
                </View>
                <Text style={styles.otherGenderText}>Otro: ______</Text>
              </View>
            </View>
          </View>

          {/* 2.1 Residencia */}
          <Text style={styles.subsectionTitle}>2.1.- Datos de Residencia</Text>
          
          <View style={styles.compactRow}>
            <View style={styles.field}>
              <Text style={styles.label}>Estado</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.field}>
              <Text style={styles.label}>Municipio</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.field}>
              <Text style={styles.label}>Localidad</Text>
              <View style={styles.input}></View>
            </View>
          </View>

          <View style={styles.compactRow}>
            <View style={styles.fieldLarge}>
              <Text style={styles.label}>Colonia</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.fieldLarge}>
              <Text style={styles.label}>Calle</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.fieldSmall}>
              <Text style={styles.label}>Número</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.fieldSmall}>
              <Text style={styles.label}>C.P.</Text>
              <View style={styles.input}></View>
            </View>
          </View>

          <View style={styles.curpContainer}>
            <Text style={styles.curpLabel}>CURP</Text>
            <View style={styles.curpBoxes}>
              {Array.from({ length: 18 }, (_, i) => (
                <View key={i} style={styles.curpBox}></View>
              ))}
            </View>
          </View>

          <View style={styles.compactRow}>
            <View style={styles.field}>
              <Text style={styles.label}>Teléfono Fijo</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.field}>
              <Text style={styles.label}>Teléfono Celular</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.fieldLarge}>
              <Text style={styles.label}>Correo Electrónico</Text>
              <View style={styles.input}></View>
            </View>
          </View>
        </View>
      </View>

      {/* Sección 2.2: Datos del Contacto - Ultra compacta */}
      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>2.2.- Datos del Contacto</Text>
        <View style={styles.contactContent}>
          <View style={styles.compactRow}>
            <View style={styles.field}>
              <Text style={styles.label}>Apellido Paterno</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.field}>
              <Text style={styles.label}>Apellido Materno</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.fieldLarge}>
              <Text style={styles.label}>Nombre (s)</Text>
              <View style={styles.input}></View>
            </View>
          </View>

          <Text style={styles.subsectionTitle}>2.2.1- Datos de Residencia del Contacto</Text>
          
          <View style={styles.compactRow}>
            <View style={styles.fieldMedium}>
              <Text style={styles.label}>Fecha Nacimiento</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.fieldXSmall}>
              <Text style={styles.label}>Edad</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.fieldSmall}>
              <Text style={styles.label}>Género</Text>
              <View style={styles.genderRow}>
                <View style={styles.genderCheckbox}>
                  <View style={styles.checkboxSquare}></View>
                  <Text style={{ fontSize: 5 }}>H</Text>
                </View>
                <View style={styles.genderCheckbox}>
                  <View style={styles.checkboxSquare}></View>
                  <Text style={{ fontSize: 5 }}>M</Text>
                </View>
              </View>
            </View>
            <View style={styles.field}>
              <Text style={styles.label}>Municipio</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.field}>
              <Text style={styles.label}>Localidad</Text>
              <View style={styles.input}></View>
            </View>
          </View>

          <View style={styles.compactRow}>
            <View style={styles.fieldLarge}>
              <Text style={styles.label}>Colonia</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.fieldLarge}>
              <Text style={styles.label}>Calle</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.fieldSmall}>
              <Text style={styles.label}>Número</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.fieldSmall}>
              <Text style={styles.label}>C.P.</Text>
              <View style={styles.input}></View>
            </View>
          </View>

          <View style={styles.compactRow}>
            <View style={styles.field}>
              <Text style={styles.label}>Tel. Fijo</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.field}>
              <Text style={styles.label}>Tel. Celular</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.field}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.input}></View>
            </View>
          </View>

          <View style={styles.compactRow}>
            <View style={styles.field}>
              <Text style={styles.label}>Parentesco o Relación</Text>
              <View style={styles.input}></View>
            </View>
            <View style={styles.fieldLarge}>
              <Text style={styles.label}>Contacto para recados</Text>
              <View style={styles.input}></View>
            </View>
          </View>
        </View>
      </View>

      {/* Sección 3: Anexos - Compacta */}
      <View style={styles.anexosSection}>
        <Text style={styles.anexosTitle}>3.- Anexos (Marcar sólo los solicitados)</Text>
        
        <View style={styles.anexosGrid}>
          <View style={styles.anexosItem}>
            <View style={styles.anexosCheckbox}></View>
            <Text style={styles.anexosLabel}>INE (Estado de Hidalgo)</Text>
          </View>
          <View style={styles.anexosItem}>
            <View style={styles.anexosCheckbox}></View>
            <Text style={styles.anexosLabel}>Constancia de Radicación</Text>
          </View>
          <View style={styles.anexosItem}>
            <View style={styles.anexosCheckbox}></View>
            <Text style={styles.anexosLabel}>CURP Certificada</Text>
          </View>
          <View style={styles.anexosItem}>
            <View style={styles.anexosCheckbox}></View>
            <Text style={styles.anexosLabel}>Acta de Nacimiento</Text>
          </View>
          <View style={styles.anexosItem}>
            <View style={styles.anexosCheckbox}></View>
            <Text style={styles.anexosLabel}>Comprobante Domicilio</Text>
          </View>
          <View style={styles.anexosItem}>
            <View style={styles.anexosCheckbox}></View>
            <Text style={styles.anexosLabel}>Otros _______</Text>
          </View>
        </View>
      </View>

      {/* Footer compacto */}
      <View style={styles.footer}>
        <Text style={styles.footerParagraph}>
          <Text style={{ fontWeight: 'bold' }}>AVISO DE PRIVACIDAD:</Text> La información proporcionada se utilizará única y exclusivamente para la finalidad de los programas sociales. No se proporcionará a terceros. El Gobierno del Estado de Hidalgo es responsable de la gestión, manejo y tratamiento de los datos personales sensibles proporcionados conforme a la LEY DE PROTECCIÓN DE DATOS PERSONALES EN POSESIÓN DE SUJETOS OBLIGADOS PARA EL ESTADO DE HIDALGO y LEY DE TRANSPARENCIA Y ACCESO A LA INFORMACIÓN PÚBLICA PARA EL ESTADO DE HIDALGO.
        </Text>
        <Text style={styles.footerParagraph}>
          Los datos serán utilizados para registro, control y expediente de beneficiarios. Para consultas: secretaria.bienestar@hidalgo.gob.mx. Aviso completo: https://sebiso.hidalgo.gob.mx/AvisosPrivacidad
        </Text>
      </View>
    </Page>
        <Page size="A4" style={styles.page}>  
      <View style={styles.header}>
        <Image src={logo} style={styles.logo} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.logoText}>HIDALGO</Text>
          <Text style={styles.logoSubText}>PRIMERO EL PUEBLO</Text>
          <Text style={styles.logoYear}>2022-2028</Text>
        </View>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Formato Único de la Persona Solicitante</Text>
        <View style={styles.titleRightSection}>
          <View style={styles.headerBox}>
            <Text style={styles.headerBoxText}>Fecha: (Día/Mes/Año)</Text>
          </View>
          <View style={styles.headerBox}>
            <Text style={styles.headerBoxText}>Folio de Registro:</Text>
          </View>
        </View>
      </View>

      {/* Sección 4: Información Específica del Programa - MÁS COMPACTA */}
      <View style={{
        marginBottom: 4,
        border: '2px solid #8B4B6B',
        borderRadius: 8,
        overflow: 'hidden'
      }}>
        <Text style={{
          fontSize: 9,
          fontWeight: 'bold',
          color: '#982850',
          padding: 3,
          marginBottom: 0,
        }}>4.- Información Específica del Programa</Text>
        
        <View style={{ padding: 4, backgroundColor: '#FFFFFF' }}>
          {/* Preguntas básicas - MÁS COMPACTAS */}
          <View style={{ flexDirection: 'row', marginBottom: 4, alignItems: 'center' }}>
            <Text style={{ fontSize: 6, color: '#333', fontWeight: 'bold', flex: 1 }}>
              1.- ¿Número de habitantes en la vivienda ( Incluye persona solicitante ) ?
            </Text>
            <View style={{ 
              border: '1px solid #8B4B6B',
              padding: 1,
              borderRadius: 3,
              width: 50,
              height: 10,
              backgroundColor: '#FFFFFF',
              marginLeft: 8
            }} />
          </View>

          <View style={{ flexDirection: 'row', marginBottom: 4, alignItems: 'center' }}>
            <Text style={{ fontSize: 6, color: '#333', fontWeight: 'bold', flex: 1 }}>
              2.- De los miembros del hogar, ¿Cuántos reciben algún programa social?
            </Text>
            <View style={{ 
              border: '1px solid #8B4B6B',
              padding: 1,
              borderRadius: 3,
              width: 50,
              height: 10,
              backgroundColor: '#FFFFFF',
              marginLeft: 8
            }} />
            <Text style={{ 
              fontSize: 6, 
              color: '#333', 
              fontWeight: 'bold', 
              marginLeft: 15,
              marginRight: 8
            }}>TOTAL</Text>
            <View style={{ 
              border: '1px solid #8B4B6B',
              padding: 1,
              borderRadius: 3,
              width: 50,
              height: 10,
              backgroundColor: '#FFFFFF'
            }} />
          </View>

          {/* Tabla de Ingreso Mensual - MÁS COMPACTA */}
          <View style={{ marginBottom: 4 }}>
            <View style={{
              backgroundColor: '#b1966c',
              padding: 2,
              marginBottom: 1
            }}>
              <Text style={{ 
                fontSize: 7, 
                color: 'white', 
                fontWeight: 'bold', 
                textAlign: 'center' 
              }}>
                Ingreso Mensual ( Anote a todas las personas del hogar. )
              </Text>
            </View>
            
            {/* Headers de la tabla */}
            <View style={{ 
              flexDirection: 'row',
              backgroundColor: '#E8D4C4',
              padding: 1,
              border: '1px solid #8B4B6B'
            }}>
              <Text style={{ 
                flex: 1, 
                fontSize: 4, 
                fontWeight: 'bold', 
                textAlign: 'center', 
                color: '#8B4B6B',
                borderRight: '1px solid #8B4B6B',
                paddingRight: 1
              }}>
                Anotar Parentesco
              </Text>
              <Text style={{ 
                flex: 0.5, 
                fontSize: 4, 
                fontWeight: 'bold', 
                textAlign: 'center', 
                color: '#8B4B6B',
                borderRight: '1px solid #8B4B6B',
                paddingRight: 1
              }}>
                Edad
              </Text>
              <Text style={{ 
                flex: 0.8, 
                fontSize: 4, 
                fontWeight: 'bold', 
                textAlign: 'center', 
                color: '#8B4B6B',
                borderRight: '1px solid #8B4B6B',
                paddingRight: 1
              }}>
                Jefe de Familia
              </Text>
              <Text style={{ 
                flex: 1, 
                fontSize: 4, 
                fontWeight: 'bold', 
                textAlign: 'center', 
                color: '#8B4B6B',
                borderRight: '1px solid #8B4B6B',
                paddingRight: 1
              }}>
                Actividad Principal
              </Text>
              <Text style={{ 
                flex: 0.7, 
                fontSize: 4, 
                fontWeight: 'bold', 
                textAlign: 'center', 
                color: '#8B4B6B',
                borderRight: '1px solid #8B4B6B',
                paddingRight: 1
              }}>
                Por trabajo
              </Text>
              <Text style={{ 
                flex: 0.8, 
                fontSize: 4, 
                fontWeight: 'bold', 
                textAlign: 'center', 
                color: '#8B4B6B',
                borderRight: '1px solid #8B4B6B',
                paddingRight: 1
              }}>
                Programas sociales
              </Text>
              <Text style={{ 
                flex: 0.8, 
                fontSize: 4, 
                fontWeight: 'bold', 
                textAlign: 'center', 
                color: '#8B4B6B'
              }}>
                Otro tipo de ingresos
              </Text>
            </View>

            {/* Filas de datos - MÁS COMPACTAS */}
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <View key={num} style={{ 
                flexDirection: 'row',
                border: '1px solid #8B4B6B',
                borderTop: 'none',
                minHeight: 12
              }}>
                <View style={{ 
                  flex: 1,
                  borderRight: '1px solid #8B4B6B',
                  padding: 0.5,
                  backgroundColor: '#FFFFFF',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Text style={{ fontSize: 3, color: '#999' }}>{num}</Text>
                </View>
                <View style={{ 
                  flex: 0.5,
                  borderRight: '1px solid #8B4B6B',
                  padding: 0.5,
                  backgroundColor: '#FFFFFF'
                }} />
                <View style={{ 
                  flex: 0.8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 0.5,
                  backgroundColor: '#FFFFFF',
                  borderRight: '1px solid #8B4B6B'
                }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 4 }}>
                    <View style={{ 
                      width: 4, 
                      height: 4, 
                      border: '1px solid #333', 
                      marginRight: 1,
                      borderRadius: 50
                    }} />
                    <Text style={{ fontSize: 3 }}>Sí</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ 
                      width: 4, 
                      height: 4, 
                      border: '1px solid #333', 
                      marginRight: 1,
                      borderRadius: 50
                    }} />
                    <Text style={{ fontSize: 3 }}>No</Text>
                  </View>
                </View>
                <View style={{ 
                  flex: 1,
                  borderRight: '1px solid #8B4B6B',
                  padding: 0.5,
                  backgroundColor: '#FFFFFF'
                }} />
                <View style={{ 
                  flex: 0.7,
                  borderRight: '1px solid #8B4B6B',
                  padding: 0.5,
                  backgroundColor: '#FFFFFF'
                }} />
                <View style={{ 
                  flex: 0.8,
                  borderRight: '1px solid #8B4B6B',
                  padding: 0.5,
                  backgroundColor: '#FFFFFF'
                }} />
                <View style={{ 
                  flex: 0.8,
                  padding: 0.5,
                  backgroundColor: '#FFFFFF'
                }} />
              </View>
            ))}

            {/* Fila TOTAL */}
            <View style={{ 
              flexDirection: 'row',
              border: '1px solid #8B4B6B',
              borderTop: 'none',
              backgroundColor: '#F0F0F0',
              minHeight: 12
            }}>
              <View style={{ 
                flex: 3.1, 
                padding: 1, 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRight: '1px solid #8B4B6B'
              }}>
                <Text style={{ fontSize: 5, fontWeight: 'bold', color: '#333' }}>TOTAL</Text>
              </View>
              <View style={{ 
                flex: 2.5,
                padding: 0.5,
                backgroundColor: '#FFFFFF'
              }} />
            </View>
          </View>
        </View>
      </View>

      {/* Sección 5: Vivienda - ULTRA COMPACTA */}
      <View style={{
        marginBottom: 4,
        border: '2px solid #8B4B6B',
        borderRadius: 8,
        overflow: 'hidden'
      }}>
        <Text style={{
          fontSize: 9,
          fontWeight: 'bold',
          color: 'white',
          backgroundColor: '#8B4B6B',
          padding: 3,
          marginBottom: 0,
        }}>5.- Vivienda</Text>
        
        <View style={{ padding: 4, backgroundColor: '#FFFFFF' }}>
          <View style={{ flexDirection: 'row', gap: 6, marginBottom: 4 }}>
            
            {/* Columna 1: Egreso Mensual y Alimentación - COMPACTA */}
            <View style={{ flex: 1 }}>
              {/* Egreso Mensual */}
              <View style={{
                backgroundColor: '#b1966c',
                padding: 2,
                marginBottom: 1,
                borderRadius: 3
              }}>
                <Text style={{ 
                  fontSize: 6, 
                  color: 'white', 
                  fontWeight: 'bold', 
                  textAlign: 'center' 
                }}>
                  Egreso Mensual
                </Text>
              </View>
              
              <View style={{ marginBottom: 3 }}>
                <Text style={{ fontSize: 5, fontWeight: 'bold', color: '#333', marginBottom: 1 }}>
                  Alimentación
                </Text>
                <Text style={{ fontSize: 4, color: '#333', marginBottom: 1 }}>
                  Porcentaje del egreso mensual destinado para alimentación
                </Text>
                <View style={{ 
                  border: '1px solid #8B4B6B',
                  padding: 1,
                  borderRadius: 3,
                  height: 10,
                  backgroundColor: '#FFFFFF'
                }} />
              </View>

              {/* Condición Étnica */}
              <View style={{
                backgroundColor: '#b1966c',
                padding: 2,
                marginBottom: 1,
                borderRadius: 3
              }}>
                <Text style={{ 
                  fontSize: 6, 
                  color: 'white', 
                  fontWeight: 'bold', 
                  textAlign: 'center' 
                }}>
                  Condición Étnica
                </Text>
              </View>
              
              <View style={{ marginBottom: 1 }}>
                <Text style={{ fontSize: 5, color: '#333', marginBottom: 1 }}>
                  ¿Habla una lengua indígena?
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 6 }}>
                    <View style={{ 
                      width: 5, 
                      height: 5, 
                      border: '1px solid #333', 
                      marginRight: 2
                    }} />
                    <Text style={{ fontSize: 4 }}>Sí</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ 
                      width: 5, 
                      height: 5, 
                      border: '1px solid #333', 
                      marginRight: 2
                    }} />
                    <Text style={{ fontSize: 4 }}>No</Text>
                  </View>
                </View>
                <View style={{ 
                  border: '1px solid #8B4B6B',
                  padding: 1,
                  borderRadius: 2,
                  height: 6,
                  backgroundColor: '#FFFFFF',
                  marginTop: 1
                }} />
              </View>

              <View style={{ marginBottom: 1 }}>
                <Text style={{ fontSize: 5, color: '#333', marginBottom: 1 }}>¿Cuál?</Text>
                <View style={{ 
                  border: '1px solid #8B4B6B',
                  padding: 1,
                  borderRadius: 2,
                  height: 6,
                  backgroundColor: '#FFFFFF'
                }} />
              </View>

              {/* Escala Final */}
              <View style={{
                backgroundColor: '#E8AFCE',
                padding: 2,
                borderRadius: 3,
                marginTop: 2
              }}>
                <Text style={{ 
                  fontSize: 6, 
                  color: '#8B4B6B', 
                  fontWeight: 'bold', 
                  textAlign: 'center',
                  marginBottom: 1
                }}>
                  Escala Final
                </Text>
                
                <View style={{ gap: 0.5 }}>
                  {[
                    'Ingreso Familiar (55)',
                    'Tipo de Vivienda (15)',
                    'Alimentación (10)',
                    'Servicios (20)',
                    'Procedencia (20)'
                  ].map((item, index) => (
                    <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ fontSize: 4, color: '#333' }}>{item}</Text>
                      <View style={{ 
                        border: '1px solid #8B4B6B',
                        width: 15,
                        height: 6,
                        backgroundColor: '#FFFFFF'
                      }} />
                    </View>
                  ))}
                  <View style={{ 
                    flexDirection: 'row', 
                    justifyContent: 'space-between',
                    borderTop: '1px solid #8B4B6B',
                    paddingTop: 1,
                    marginTop: 1
                  }}>
                    <Text style={{ fontSize: 5, color: '#333', fontWeight: 'bold' }}>TOTAL</Text>
                    <View style={{ 
                      border: '1px solid #8B4B6B',
                      width: 15,
                      height: 6,
                      backgroundColor: '#FFFFFF'
                    }} />
                  </View>
                </View>
              </View>
            </View>

            {/* Columna 2: Posesión y Material - COMPACTA */}
            <View style={{ flex: 1.2 }}>
              {/* Posesión de la Vivienda */}
              <View style={{
                backgroundColor: '#b1966c',
                padding: 2,
                marginBottom: 1,
                borderRadius: 3
              }}>
                <Text style={{ 
                  fontSize: 6, 
                  color: 'white', 
                  fontWeight: 'bold', 
                  textAlign: 'center' 
                }}>
                  Posesión de la Vivienda
                </Text>
              </View>

              <View style={{ marginBottom: 3 }}>
                <Text style={{ fontSize: 5, color: '#333', marginBottom: 1 }}>
                  La vivienda donde habita es:
                </Text>
                <Text style={{ fontSize: 4, color: '#666', marginBottom: 1 }}>
                  (Registre la opción correspondiente)
                </Text>
                
                <View style={{ gap: 0.5 }}>
                  {[
                    'Propia y totalmente pagada........01',
                    'Propia y aún la está pagando......02',
                    'Propia y está hipotecada...........03',
                    'Rentada o Alquilada................04',
                    'Prestada..............................05',
                    'Intestada o está en litigio........06'
                  ].map((option, index) => (
                    <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View style={{ 
                        width: 4, 
                        height: 4, 
                        border: '1px solid #333', 
                        marginRight: 2
                      }} />
                      <Text style={{ fontSize: 3, color: '#333' }}>{option}</Text>
                    </View>
                  ))}
                </View>
              </View>

              {/* Material de la Vivienda */}
              <View style={{
                backgroundColor: '#b1966c',
                padding: 2,
                marginBottom: 1,
                borderRadius: 3
              }}>
                <Text style={{ 
                  fontSize: 6, 
                  color: 'white', 
                  fontWeight: 'bold', 
                  textAlign: 'center' 
                }}>
                  Material de la Vivienda
                </Text>
              </View>

              <View style={{ marginBottom: 1 }}>
                <Text style={{ fontSize: 5, color: '#333', marginBottom: 1 }}>
                  ¿De qué material están hechos los techos de su vivienda?
                </Text>
                <Text style={{ fontSize: 4, color: '#666', marginBottom: 1 }}>
                  (Lea las opciones y registre el número correspondiente)
                </Text>
                <View style={{ 
                  border: '1px solid #8B4B6B',
                  padding: 1,
                  borderRadius: 2,
                  height: 6,
                  backgroundColor: '#FFFFFF'
                }} />
              </View>

              <View style={{ flexDirection: 'row', gap: 2, marginBottom: 1 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 4, color: '#333', marginBottom: 1 }}>
                    a.- Las Paredes o muros de la vivienda
                  </Text>
                  <View style={{ 
                    border: '1px solid #8B4B6B',
                    padding: 1,
                    borderRadius: 2,
                    height: 6,
                    backgroundColor: '#FFFFFF'
                  }} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 4, color: '#333', marginBottom: 1 }}>
                    b.- Techo de la vivienda
                  </Text>
                  <View style={{ 
                    border: '1px solid #8B4B6B',
                    padding: 1,
                    borderRadius: 2,
                    height: 6,
                    backgroundColor: '#FFFFFF'
                  }} />
                </View>
              </View>

              <View style={{ marginBottom: 1 }}>
                <Text style={{ fontSize: 4, color: '#333', marginBottom: 1 }}>
                  c.- Piso de la vivienda
                </Text>
                <View style={{ 
                  border: '1px solid #8B4B6B',
                  padding: 1,
                  borderRadius: 2,
                  height: 6,
                  backgroundColor: '#FFFFFF'
                }} />
              </View>

              {/* Servicios básicos */}
              <View style={{ marginTop: 2 }}>
                <Text style={{ fontSize: 5, color: '#333', fontWeight: 'bold', marginBottom: 1 }}>
                  Servicios básicos con los que cuenta (Registre si número correspondiente de su respuesta)
                </Text>
                
                <View style={{ flexDirection: 'row', gap: 2 }}>
                  <View style={{ flex: 1 }}>
                    <View style={{ gap: 0.5 }}>
                      {[
                        'a.-Luz',
                        'b.-Agua potable',
                        'c.-Cisterna',
                        'd.-Celular'
                      ].map((service, index) => (
                        <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Text style={{ fontSize: 3, color: '#333' }}>{service}</Text>
                          <View style={{ flexDirection: 'row', gap: 2 }}>
                            <Text style={{ fontSize: 3, color: '#333' }}>Sí__01</Text>
                            <Text style={{ fontSize: 3, color: '#333' }}>NO__02</Text>
                          </View>
                        </View>
                      ))}
                    </View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <View style={{ gap: 0.5 }}>
                      {[
                        'e.-Internet en casa',
                        'f.-Televisión',
                        'g.-Cable o internet conectado a?',
                        'Red municipal____03',
                        'Luz de día____04',
                        'No tiene____06'
                      ].map((service, index) => (
                        <Text key={index} style={{ fontSize: 3, color: '#333' }}>{service}</Text>
                      ))}
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* Columna 3: Tipos de Material y Tamaño - COMPACTA */}
            <View style={{ flex: 1 }}>
              {/* Tipos de Material */}
              <View style={{
                backgroundColor: '#F5F5F5',
                padding: 2,
                marginBottom: 1,
                borderRadius: 3,
                border: '1px solid #CCC'
              }}>
                <Text style={{ 
                  fontSize: 5, 
                  color: '#333', 
                  fontWeight: 'bold',
                  marginBottom: 1
                }}>
                  Tipos de Material (Opciones)
                </Text>
                
                <View style={{ gap: 0.2 }}>
                  {[
                    'Cartón, tela........................01',
                    'Palma o Paja.......................02',
                    'Adobe.................................03',
                    'Tabique..............................04',
                    'Lámina de cartón..................05',
                    'Lámina metálica...................06',
                    'Teja....................................07',
                    'Lladero o lojamami...............08',
                    'Tabique, ladrillo o piedra......09',
                    'Concreto, firme, loseta..........10',
                    'Otro....................................11'
                  ].map((material, index) => (
                    <Text key={index} style={{ fontSize: 2.5, color: '#333' }}>
                      {material}
                    </Text>
                  ))}
                </View>
              </View>

              {/* Tamaño de la Vivienda */}
              <View style={{
                backgroundColor: '#b1966c',
                padding: 2,
                marginBottom: 1,
                borderRadius: 3
              }}>
                <Text style={{ 
                  fontSize: 6, 
                  color: 'white', 
                  fontWeight: 'bold', 
                  textAlign: 'center' 
                }}>
                  Tamaño de la Vivienda
                </Text>
              </View>

              <View style={{ marginBottom: 1 }}>
                <Text style={{ fontSize: 5, color: '#333', marginBottom: 1 }}>
                  La vivienda donde habita, ¿Cuántos dormitorios tiene?
                </Text>
                <Text style={{ fontSize: 4, color: '#666', marginBottom: 1 }}>
                  (Registre solamente las habitaciones para dormir)
                </Text>
                <View style={{ 
                  border: '1px solid #8B4B6B',
                  padding: 1,
                  borderRadius: 2,
                  height: 10,
                  backgroundColor: '#FFFFFF'
                }} />
              </View>

              <View style={{ marginBottom: 1 }}>
                <Text style={{ fontSize: 5, color: '#333', marginBottom: 1 }}>
                  Número de personas por dormitorio (Registre el número correspondiente de su respuesta)
                </Text>
                <View style={{ flexDirection: 'row', gap: 2, marginBottom: 1 }}>
                  <Text style={{ fontSize: 4, color: '#333' }}>a.- 4 o más........01</Text>
                  <Text style={{ fontSize: 4, color: '#333' }}>b.- 3.........02</Text>
                  <Text style={{ fontSize: 4, color: '#333' }}>c.- 1 o 2........03</Text>
                </View>
                <View style={{ 
                  border: '1px solid #8B4B6B',
                  padding: 1,
                  borderRadius: 2,
                  height: 6,
                  backgroundColor: '#FFFFFF'
                }} />
              </View>

              {/* Puntaje de Vivienda */}
              <View style={{
                backgroundColor: '#E8AFCE',
                padding: 2,
                borderRadius: 3,
                marginTop: 2
              }}>
                <Text style={{ 
                  fontSize: 6, 
                  color: '#8B4B6B', 
                  fontWeight: 'bold', 
                  textAlign: 'center',
                  marginBottom: 1
                }}>
                  Puntaje Obtenido
                </Text>
                <View style={{ 
                  border: '1px solid #8B4B6B',
                  padding: 1,
                  borderRadius: 3,
                  height: 15,
                  backgroundColor: '#FFFFFF'
                }} />
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Sección 5: Solicitud - ULTRA COMPACTA */}
      <View style={{
        marginBottom: 3,
        border: '2px solid #8B4B6B',
        borderRadius: 8,
        overflow: 'hidden'
      }}>
        <Text style={{
          fontSize: 9,
          fontWeight: 'bold',
          color: '#8B4B6B',
          backgroundColor: '#b1966c',
          padding: 3,
          marginBottom: 0,
        }}>5.- Solicitud</Text>
        
        <View style={{ padding: 4, backgroundColor: '#FFFFFF' }}>
          <View style={{ flexDirection: 'row', gap: 6 }}>
            {/* Columna principal con el texto */}
            <View style={{ flex: 2 }}>
              <Text style={{ 
                fontSize: 5, 
                color: '#333', 
                lineHeight: 1.2,
                textAlign: 'justify',
                marginBottom: 2
              }}>
                Por medio de la presente, bajo protesta de decir verdad, manifiesto que mis datos son auténticos, por lo que solicito mi incorporación al programa antes señalado, ya que cumplo con los requisitos establecidos en la normatividad aplicable, misma a la que me obligo a dar cumplimiento. Asimismo, manifiesto de manera libre e informada mi consentimiento para el tratamiento y transferencia de los datos contenidos en la presente. Autorizo expresamente la inclusión de mis datos personales para el registro de la solicitud, así como en el padrón que determine el Gobierno del Estado de Hidalgo.
              </Text>
              
              <Text style={{ 
                fontSize: 5, 
                color: '#E91E63', 
                fontWeight: 'bold',
                lineHeight: 1.2,
                textAlign: 'justify'
              }}>
                Diagnóstico social, o características prioritarias del programa no contempladas y contempladas en el cuestionario. Se puede agregar un anexo en caso necesario.
              </Text>
              
              {/* Área de texto grande */}
              <View style={{
                border: '2px solid #8B4B6B',
                borderRadius: 5,
                minHeight: 50,
                backgroundColor: '#FFFFFF',
                marginTop: 3,
                padding: 2
              }} />
            </View>
            
            {/* Columna derecha - Firma */}
            <View style={{ flex: 1, alignItems: 'center' }}>
              <View style={{
                border: '2px solid #8B4B6B',
                borderRadius: 5,
                width: 100,
                height: 50,
                backgroundColor: '#FFFFFF',
                marginBottom: 4,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={{ 
                  fontSize: 4, 
                  color: '#999',
                  textAlign: 'center'
                }}>
                  Espacio para firma
                </Text>
              </View>
              
              <View style={{
                borderTop: '1px solid #333',
                width: 100,
                paddingTop: 1,
                alignItems: 'center'
              }}>
                <Text style={{ 
                  fontSize: 5, 
                  color: '#333',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}>
                  Firma del solicitante
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Sección 6: Validación de Información - ULTRA COMPACTA */}
      <View style={{
        marginBottom: 3,
        border: '2px solid #8B4B6B',
        borderRadius: 8,
        overflow: 'hidden'
      }}>
        <Text style={{
          fontSize: 9,
          fontWeight: 'bold',
          color: '#8B4B6B',
          backgroundColor: '#b1966c',
          padding: 3,
          marginBottom: 0,
        }}>6.- Validación de Información</Text>
        
        <View style={{ padding: 4, backgroundColor: '#FFFFFF' }}>
          <View style={{ flexDirection: 'row', gap: 6, marginBottom: 3 }}>
            {/* Pregunta principal */}
            <View style={{ flex: 1 }}>
              <Text style={{ 
                fontSize: 6, 
                color: '#333',
                fontWeight: 'bold',
                marginBottom: 2
              }}>
                1.- ¿El solicitante cumple con los criterios de selección y elegibilidad?
              </Text>
              
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ 
                    width: 10, 
                    height: 10, 
                    border: '2px solid #333', 
                    marginRight: 3,
                    borderRadius: 50
                  }} />
                  <Text style={{ fontSize: 7, color: '#333', fontWeight: 'bold' }}>SÍ</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ 
                    width: 10, 
                    height: 10, 
                    border: '2px solid #333', 
                    marginRight: 3,
                    borderRadius: 50
                  }} />
                  <Text style={{ fontSize: 7, color: '#333', fontWeight: 'bold' }}>NO</Text>
                </View>
              </View>
            </View>
            
            {/* Puntaje obtenido */}
            <View style={{ flex: 0.6 }}>
              <Text style={{ 
                fontSize: 6, 
                color: '#333',
                fontWeight: 'bold',
                marginBottom: 2,
                textAlign: 'center'
              }}>
                2.- Puntaje Obtenido
              </Text>
              <View style={{
                border: '2px solid #8B4B6B',
                borderRadius: 5,
                height: 20,
                backgroundColor: '#FFFFFF'
              }} />
            </View>
          </View>
          
          {/* Firmas inferiores */}
          <View style={{ flexDirection: 'row', gap: 6, marginTop: 4 }}>
            {/* Elaboró */}
            <View style={{ flex: 1, alignItems: 'center' }}>
              <View style={{
                border: '1px solid #8B4B6B',
                borderRadius: 3,
                width: '100%',
                height: 30,
                backgroundColor: '#FFFFFF',
                marginBottom: 3
              }} />
              <View style={{
                borderTop: '1px solid #333',
                width: '80%',
                paddingTop: 1,
                alignItems: 'center'
              }}>
                <Text style={{ 
                  fontSize: 4, 
                  color: '#333',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}>
                  Elaboró: Nombre / Cargo / Firma
                </Text>
              </View>
            </View>
            
            {/* Validó */}
            <View style={{ flex: 1, alignItems: 'center' }}>
              <View style={{
                border: '1px solid #8B4B6B',
                borderRadius: 3,
                width: '100%',
                height: 30,
                backgroundColor: '#FFFFFF',
                marginBottom: 3
              }} />
              <View style={{
                borderTop: '1px solid #333',
                width: '80%',
                paddingTop: 1,
                alignItems: 'center'
              }}>
                <Text style={{ 
                  fontSize: 4, 
                  color: '#333',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}>
                  Validó: Nombre / Cargo / Firma
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Número de página */}
      <View style={{
        position: 'absolute',
        bottom: 10,
        right: 20,
        backgroundColor: '#8B4B6B',
        borderRadius: 10,
        paddingVertical: 2,
        paddingHorizontal: 8
      }}>
        <Text style={{
          fontSize: 8,
          color: 'white',
          fontWeight: 'bold'
        }}>
          2
        </Text>
      </View>
    </Page>
    
    

  </Document>
);

export default FormatoPDF;