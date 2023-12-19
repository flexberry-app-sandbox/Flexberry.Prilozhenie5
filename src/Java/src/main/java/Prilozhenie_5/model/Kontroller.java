package Prilozhenie_5.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Prilozhenie_5.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Контроллер
 */
@Entity(name = "IISPrilozhenie_5Контроллер")
@Table(schema = "public", name = "Контроллер")
public class Kontroller {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Модель")
    private String модель;

    @Column(name = "IdКонтроллера")
    private Integer idконтроллера;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sensory")
    @Convert("Sensory")
    @Column(name = "Сенсоры", length = 16, unique = true, nullable = false)
    private UUID _sensoryid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sensory", insertable = false, updatable = false)
    private Sensory sensory;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Servernaya")
    @Convert("Servernaya")
    @Column(name = "Серверная", length = 16, unique = true, nullable = false)
    private UUID _servernayaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Servernaya", insertable = false, updatable = false)
    private Servernaya servernaya;


    public Kontroller() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getМодель() {
      return модель;
    }

    public void setМодель(String модель) {
      this.модель = модель;
    }

    public Integer getIdКонтроллера() {
      return idконтроллера;
    }

    public void setIdКонтроллера(Integer idконтроллера) {
      this.idконтроллера = idконтроллера;
    }


}